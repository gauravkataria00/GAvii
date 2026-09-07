import { formatNumber } from '../utils/gameUtils'
import Icon from './Icon'

export default function ResultReveal({ result, play }) {
  if (!result) return <section className="result-reveal result-empty"><span className="reveal-label">TODAY'S RESULT</span><strong>--</strong><p>Generate a demo result to see the reveal here.</p></section>
  const isMatch = play?.status === 'match'
  return <section className={`result-reveal ${isMatch ? 'is-match' : ''}`} aria-live="polite"><div><span className="reveal-label">TODAY'S RESULT</span><strong className="reveal-number">{formatNumber(result.number)}</strong></div><div className="reveal-detail"><span>Your Number: {play ? formatNumber(play.number) : '--'}</span>{play && <strong className={isMatch ? 'match-text' : 'no-match-text'}><Icon>{isMatch ? '✓' : '×'}</Icon>{isMatch ? 'Demo Match!' : 'No Match'}</strong>}</div></section>
}