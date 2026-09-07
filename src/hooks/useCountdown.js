import { useEffect, useState } from 'react'
import { formatCountdown } from '../utils/timeUtils'

export function useCountdown(target) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])
  return formatCountdown(new Date(target).getTime() - now.getTime())
}