import { formatCredits } from '../utils/gameUtils'

export default function DemoBalance({ balance }) {
  return <div className="balance-panel"><span>Demo Balance</span><strong>{formatCredits(balance)}</strong><small>Demo Credits — No Real Money Value</small></div>
}