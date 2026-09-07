import ResultHistory from './ResultHistory'
import TransactionHistory from './TransactionHistory'
import SampleSimulationHistory from './SampleSimulationHistory'

function sixMonthsAgo() {
  const date = new Date()
  date.setMonth(date.getMonth() - 6)
  return date
}

export default function HistoryPage({ results, plays, onGenerate, onBack, confirmation }) {
  const cutoff = sixMonthsAgo().getTime()
  const recentResults = results.filter((result) => new Date(result.generatedAt).getTime() >= cutoff)
  const recentPlays = plays.filter((play) => new Date(play.createdAt).getTime() >= cutoff)

  return <main className="history-page"><button className="back-link" onClick={onBack}>← Back to Play</button>{confirmation && <div className="confirmation-banner" role="status"><strong>Virtual play saved</strong><span>{confirmation}</span></div>}<div className="history-page-heading"><p className="eyebrow">Archive · Last 6 months</p><h1>Your History</h1><p>Review recent simulation results and virtual plays in one quiet, separate view.</p></div>{recentResults.length === 0 && recentPlays.length === 0 && <SampleSimulationHistory />}<div className="history-page-grid"><ResultHistory results={recentResults} onGenerate={onGenerate} /><TransactionHistory plays={recentPlays} /></div></main>
}