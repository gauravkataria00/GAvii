import { formatNumber } from '../utils/gameUtils'

const SAMPLE_RESULTS = [
  { month: 'Example · September', results: [['06:00 AM', 42], ['12:00 PM', 17], ['03:00 PM', 83], ['06:00 PM', 5]] },
  { month: 'Example · August', results: [['06:00 AM', 9], ['12:00 PM', 64], ['03:00 PM', 28], ['06:00 PM', 71]] },
  { month: 'Example · July', results: [['06:00 AM', 56], ['12:00 PM', 3], ['03:00 PM', 90], ['06:00 PM', 34]] },
  { month: 'Example · June', results: [['06:00 AM', 12], ['12:00 PM', 48], ['03:00 PM', 76], ['06:00 PM', 21]] },
  { month: 'Example · May', results: [['06:00 AM', 67], ['12:00 PM', 18], ['03:00 PM', 45], ['06:00 PM', 99]] },
  { month: 'Example · April', results: [['06:00 AM', 31], ['12:00 PM', 84], ['03:00 PM', 7], ['06:00 PM', 62]] },
]

export default function SampleSimulationHistory() {
  return <section className="sample-history" aria-labelledby="sample-history-title"><div className="sample-history-heading"><div><p className="eyebrow">Illustrative examples · 6 months</p><h2 id="sample-history-title">Sample Demo Results</h2></div><span>NOT ACTUAL ACTIVITY</span></div><p>These example records show all four daily sessions across the previous six example months. They are not real results, transactions, or user activity.</p><div className="sample-history-list">{SAMPLE_RESULTS.map((month) => <div className="sample-history-row" key={month.month}><span>{month.month}</span>{month.results.map(([time, number]) => <div className="sample-result-line" key={time}><strong>{time}</strong><b>{formatNumber(number)}</b></div>)}</div>)}</div></section>
}
