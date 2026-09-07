import { formatDateTime, formatNumber } from '../utils/gameUtils'
import CountdownTimer from './CountdownTimer'

export default function SessionCard({ session, result, isNext }) {
  return <article className={`session-card ${isNext ? 'is-next' : ''}`}><div className="session-card-top"><span className="session-icon" aria-hidden="true">{session.name.charAt(0)}</span><div><strong>{session.name}</strong><span>{session.time}</span></div><span className={`status ${result ? 'completed' : 'upcoming'}`}>{result ? 'Completed' : 'Upcoming'}</span></div><div className="session-result"><span>Demo result</span><strong>{result ? formatNumber(result.number) : '--'}</strong></div>{result ? <small className="completion">Generated {formatDateTime(result.generatedAt)}</small> : isNext && <CountdownTimer target={session.scheduledAt} label="Next result in" />}</article>
}