import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getProductBySku } from '@/data/products'
import { calculateShipping } from '@/data/commerce'
import type { CustomerType } from '@/data/types'

const checkoutSchema = z.object({
  items: z.array(
    z.object({
      sku: z.string().min(1),
      quantity: z.number().int().min(1).max(100),
    })
  ),
  customerType: z.enum(['B2C', 'B2B']),
})

type CheckoutPayload = z.infer<typeof checkoutSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = checkoutSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { items, customerType } = parsed.data

    // Server-side price authority: look up each SKU
    const lineItems: Array<{
      sku: string
      name: string
      quantity: number
      unitAmount: number
    }> = []

    let subtotal = 0
    let containsAlcohol = false

    for (const item of items) {
      const product = getProductBySku(item.sku)

      if (!product) {
        return NextResponse.json(
          { error: `Produto não encontrado: ${item.sku}` },
          { status: 404 }
        )
      }

      if (product.stockStatus === 'out_of_stock') {
        return NextResponse.json(
          { error: `Produto indisponível: ${product.name}` },
          { status: 400 }
        )
      }

      lineItems.push({
        sku: product.sku,
        name: product.name,
        quantity: item.quantity,
        unitAmount: Math.round(product.price * 100), // Stripe uses cents
      })

      subtotal += product.price * item.quantity
      if (product.alcohol) containsAlcohol = true
    }

    const shipping = calculateShipping(subtotal)
    const shippingCents = Math.round(shipping * 100)

    // In demo mode, return a mock response without calling Stripe
    const commerceMode = process.env.NEXT_PUBLIC_COMMERCE_MODE ?? 'demo'
    const stripeKey = process.env.STRIPE_SECRET_KEY

    if (commerceMode === 'demo' || !stripeKey) {
      return NextResponse.json({
        mode: 'demo',
        message: 'Checkout em modo demonstração. Nenhum pagamento foi processado.',
        orderSummary: {
          items: lineItems,
          subtotal: Math.round(subtotal * 100),
          shipping: shippingCents,
          total: Math.round((subtotal + shipping) * 100),
          currency: 'eur',
          customerType,
          containsAlcohol,
        },
      })
    }

    // Live mode: create Stripe Checkout Session
    const stripe = await import('stripe').then((m) =>
      m.default(process.env.STRIPE_SECRET_KEY!)
    )

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        ...lineItems.map((li) => ({
          price_data: {
            currency: 'eur',
            product_data: {
              name: li.name,
              metadata: { sku: li.sku },
            },
            unit_amount: li.unitAmount,
          },
          quantity: li.quantity,
        })),
        // Add shipping as a line item
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: shipping === 0 ? 'Envio (Grátis)' : 'Envio - Portugal Continental',
            },
            unit_amount: shippingCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        source: 'liquidthesis-web',
        customer_type: customerType as CustomerType,
        contains_alcohol: String(containsAlcohol),
      },
      success_url: `${siteUrl}/checkout/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/carrinho?checkout=cancelled`,
    })

    return NextResponse.json({ url: session.url, sessionId: session.id })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Erro ao processar o checkout' },
      { status: 500 }
    )
  }
}
