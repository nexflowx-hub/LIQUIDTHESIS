'use client'

import { useSyncExternalStore, useCallback } from 'react'

const STORAGE_KEY = 'lt-cookies-accepted'

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
 */
function useIsClient(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

export function CookieConsent() {
  const isClient = useIsClient()
  const accepted = useSyncExternalStore(
    (cb) => window.addEventListener('storage', cb),
    getStorageSnapshot,
    () => 'pending' as string | null
  )

  const visible = isClient && accepted === null

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore storage errors
    }
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }))
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:bottom-6 md:max-w-sm">
      <div className="rounded-lg border border-border bg-white p-4 shadow-xl">
        <p className="text-sm text-dark/80 leading-relaxed">
          Este website utiliza cookies para melhorar a sua experiência.{' '}
          <a href="#" className="underline text-dark/60 hover:text-dark">
            Saber mais
          </a>
        </p>
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={handleAccept}
            className="bg-gold px-4 py-1.5 text-sm font-medium text-dark rounded-sm transition-colors hover:bg-gold-light"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
