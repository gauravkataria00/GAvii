import { useCountdown } from '../hooks/useCountdown'
import Icon from './Icon'

export default function CountdownTimer({ target, label }) {
  const countdown = useCountdown(target)
  return <div className="countdown"><span><Icon>◷</Icon>{label}</span><strong>{countdown}</strong></div>
}