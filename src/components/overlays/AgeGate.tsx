'use client'

import { useSyncExternalStore, useState, useCallback } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const STORAGE_KEY = 'lt-age-confirmed'

const emptySubscribe = () => () => {}

function getStorageSnapshot(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Returns true when client-side hydration is complete.
 * Uses useSyncExternalStore to avoid the set-state-in-effect lint warning.
 */
function useIsClient(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

export function AgeGate() {
  const isClient = useIsClient()
  const confirmed = useSyncExternalStore(
    (cb) => window.addEventListener('storage', cb),
    getStorageSnapshot,
    () => 'pending' as string | null
  )
  const [showUnderAge, setShowUnderAge] = useState(false)

  // Only show on client when localStorage doesn't have the key yet
  const isOpen = isClient && confirmed === null

  const handleConfirm = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore storage errors
    }
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }))
  }, [])

  const handleUnderAge = useCallback(() => {
    setShowUnderAge(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="bg-ivory max-w-md mx-4 p-8 rounded-lg shadow-2xl"
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="items-center text-center">
          <DialogTitle className="font-heading text-2xl text-dark">
            Bem-vindo à LiquidThesis
          </DialogTitle>
          <DialogDescription className="mt-3 text-sm text-muted max-w-sm">
            Para aceder à nossa seleção de vinhos, confirme que tem 18 anos ou mais.
          </DialogDescription>
        </DialogHeader>

        {showUnderAge ? (
          <p className="mt-2 text-center text-sm text-muted">
            Os nossos produtos sem álcool — azeites, conservas e gourmet — continuam disponíveis para exploração. Para vinhos, volte quando tiver idade legal.
          </p>
        ) : (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={handleConfirm}
              className="bg-gold px-6 py-2.5 font-medium text-dark rounded transition-colors hover:bg-gold-light"
            >
              Tenho 18 anos ou mais
            </button>
            <button
              type="button"
              onClick={handleUnderAge}
              className="border border-border px-6 py-2.5 text-muted rounded transition-colors hover:bg-cream"
            >
              Ainda não tenho 18 anos
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
