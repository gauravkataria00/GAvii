import { useCallback, useEffect, useState } from 'react'
import { useDemoAccount } from './hooks/useDemoAccount'
import { usePersistedDemoState } from './hooks/useLocalStorage'
import DemoNotice from './components/DemoNotice'
import Header from './components/Header'
import Hero from './components/Hero'
import HistoryPage from './components/HistoryPage'
import LandingPage from './components/LandingPage'
import NumberGrid from './components/NumberGrid'
import ResultReveal from './components/ResultReveal'
import SessionList from './components/SessionList'
import VirtualPlayPanel from './components/VirtualPlayPanel'

export default function App() {
  const { state, selectedNumber, setSelectedNumber, feedback, setFeedback, generateResult, submitPlay, resetAccount } = useDemoAccount()
  const [now, setNow] = useState(() => new Date())
  const [storageError, setStorageError] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState('landing')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [playConfirmation, setPlayConfirmation] = useState('')
  const onStorageError = useCallback(() => setStorageError(true), [])

  usePersistedDemoState(state, onStorageError)
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    if (!feedback) return undefined
    const timer = window.setTimeout(() => setFeedback(null), 4500)
    return () => window.clearTimeout(timer)
  }, [feedback, setFeedback])

  const navigate = (nextPage) => {
    setPage(nextPage)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePlay = (stake) => {
    setIsSubmitting(true)
    window.setTimeout(() => {
      submitPlay(stake)
      setPlayConfirmation('Your virtual play has been recorded. Review the result in your local history.')
      setIsSubmitting(false)
      navigate('history')
    }, 550)
  }

  const latestResult = state.results[0]
  const latestPlay = state.plays.find((play) => play.sessionId === latestResult?.occurrenceId)
  const showFeedback = feedback || storageError

  return <div className="app-shell">
    <Header balance={state.account.balance} onReset={resetAccount} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={navigate} />
    <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
      <button onClick={() => navigate('landing')}>Home</button><button onClick={() => navigate('home')}>Play</button>
      <button onClick={() => navigate('results')}>Results</button>
      <button onClick={() => navigate('history')}>History</button>
    </nav>
    {page === 'landing' && <LandingPage onStart={() => navigate('home')} onHistory={() => navigate('history')} />}
    {page === 'history' && <HistoryPage results={state.results} plays={state.plays} confirmation={playConfirmation} onGenerate={generateResult} onBack={() => navigate('home')} />}
    {page !== 'history' && <main>
      <DemoNotice />
      {page === 'home' && <>
        <Hero />
        <div className="flow-heading" id="game"><span className="flow-line" /><div><p className="eyebrow">Your turn</p><h2>Choose Your Number</h2><p>Select any number from 00 to 99 to get started.</p></div><span className="flow-hint">1 of 2</span></div>
        {showFeedback && <div className={`toast ${storageError ? 'toast-error' : ''}`} role="status">{storageError ? 'LocalStorage is unavailable. This session will not persist after refresh.' : feedback.text}</div>}
        <div className="game-layout"><div className="game-main">
          <NumberGrid selectedNumber={selectedNumber} onSelect={setSelectedNumber} />
          <VirtualPlayPanel selectedNumber={selectedNumber} balance={state.account.balance} onSubmit={handlePlay} isSubmitting={isSubmitting} />
        </div><aside className="game-aside">
          <div className="balance-card"><span className="balance-label">Demo Balance</span><strong>₹{state.account.balance.toLocaleString('en-IN')}</strong><span className="balance-caption">Virtual Credits · No Real Money Value</span></div>
          <ResultReveal key={latestResult?.id ?? 'empty'} result={latestResult} play={latestPlay} />
        </aside></div>
      </>}
      {page === 'results' && <section className="standalone-section"><div className="section-intro"><div><p className="eyebrow">Stay in the loop</p><h1>Today's Results</h1><p>Four local simulation sessions, using your browser time.</p></div><button className="button button-outline" onClick={generateResult}>Generate Demo Result <span>✦</span></button></div><SessionList results={state.results} now={now} /></section>}
    </main>}
    <footer><span>ONLY ONE KING / SIMULATION</span><span>Virtual credits only — no real money value.</span></footer>
  </div>
}
