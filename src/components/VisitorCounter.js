'use client'

import { useEffect, useState } from 'react'

const API_URL = '/api/counter'

export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const fetchCount = async () => {
      try {
        const incrementPromise = fetch(API_URL, { method: 'POST' }).then((r) => {
          if (!r.ok) throw new Error('Failed to increment')
          return r.json()
        })

        const countPromise = fetch(API_URL, { method: 'GET' }).then((r) => {
          if (!r.ok) throw new Error('Failed to fetch')
          return r.json()
        })

        const incrementResult = await incrementPromise
        const countResult = await countPromise
        setCount(countResult.count || incrementResult.count)
      } catch (error) {
        setCount(1260)
      }
    }

    fetchCount()
  }, [])

  if (count === null) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs text-muted">
      Visitors: <span className="text-white font-semibold">{count.toLocaleString()}</span>
    </div>
  )
}
