import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const stripeKey = process.env.STRIPE_WEBHOOK_SECRET

    if (!stripeKey) {
      console.info('stripe.webhook.skipped', { reason: 'no_webhook_secret' })
      return NextResponse.json({ received: true })
    }

    const stripe = await import('stripe').then((m) =>
      m.default(process.env.STRIPE_SECRET_KEY!)
    )

    // Verify webhook signature
    const sig = request.headers.get('stripe-signature')
    if (!sig) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    let event: ReturnType<typeof stripe.webhooks.constructEvent>
    try {
      event = stripe.webhooks.constructEvent(body, sig, stripeKey)
    } catch {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    switch (event.type) {
      case 'checkout.session.completed':
        handleCheckoutCompleted(event.data.object)
        break
      case 'checkout.session.async_payment_succeeded':
        console.info('stripe.checkout.async_payment_succeeded', {
          sessionId: event.data.object.id,
        })
        break
      case 'checkout.session.async_payment_failed':
        handlePaymentFailed(event.data.object)
        break
      case 'payment_intent.payment_failed':
        handlePaymentFailed(event.data.object)
        break
      default:
        console.info('stripe.webhook.unhandled', { type: event.type })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

function handleCheckoutCompleted(session: Record<string, unknown>) {
  console.info('stripe.checkout.completed', {
    sessionId: session.id,
    paymentStatus: session.payment_status,
    customerEmail: session.customer_email,
    amountTotal: session.amount_total,
    metadata: session.metadata,
  })
}

function handlePaymentFailed(session: Record<string, unknown>) {
  console.info('stripe.payment_failed', {
    sessionId: session.id,
    customerEmail: session.customer_email,
  })
}
