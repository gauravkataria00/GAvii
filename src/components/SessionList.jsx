import { getNextOccurrence, getTodayOccurrences } from '../utils/timeUtils'
import SessionCard from './SessionCard'

export default function SessionList({ results, now }) {
  const next = getNextOccurrence(now)
  return <section className="card sessions-card" aria-labelledby="sessions-title"><div className="section-heading"><div><p className="eyebrow">Live schedule</p><h2 id="sessions-title">Scheduled demo results</h2></div><span className="live-label"><i /> Local time</span></div><div className="session-list">{getTodayOccurrences(now).map((session) => <SessionCard key={session.id} session={session} result={results.find((item) => item.occurrenceId === session.occurrenceId)} isNext={session.occurrenceId === next.occurrenceId} />)}</div></section>
}