import { formatDateTime, formatNumber } from '../utils/gameUtils'
import Icon from './Icon'

export default function ResultHistory({ results, onGenerate }) {
  return <section className="card history-card" aria-labelledby="history-title"><div className="section-heading"><div><p className="eyebrow">Past simulations</p><h2 id="history-title">Result history</h2></div><button className="button button-outline" onClick={onGenerate}><Icon>✦</Icon> Generate Demo Result</button></div>{results.length === 0 ? <EmptyState text="No demo results yet" detail="Generate a local result to start the history." /> : <div className="history-table" role="table" aria-label="Demo result history">{results.slice(0, 8).map((result) => <div className="history-row" role="row" key={result.id}><span className="history-date">{formatDateTime(result.generatedAt)}</span><strong>{result.sessionName} · {result.time}</strong><span className="result-pill">{formatNumber(result.number)}</span></div>)}</div>}</section>
}

function EmptyState({ text, detail }) { return <div className="empty-state"><span>○</span><strong>{text}</strong><small>{detail}</small></div> }