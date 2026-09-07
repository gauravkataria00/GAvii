import { useCallback, useState } from 'react'
import { DEMO_MULTIPLIER } from '../constants/gameConfig'
import { randomNumber } from '../utils/gameUtils'
import { getActiveOccurrence } from '../utils/timeUtils'
import { createDefaultDemoState, loadDemoState } from '../utils/storage'

export function useDemoAccount() {
  const [state, setState] = useState(loadDemoState)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [feedback, setFeedback] = useState(null)

  const generateResult = useCallback(() => {
    const now = new Date()
    const session = getActiveOccurrence(now)
    const number = randomNumber()
    setState((current) => {
      const plays = current.plays.map((play) => {
        if (play.sessionId !== session.occurrenceId || play.status !== 'pending') return play
        const isMatch = play.number === number
        return { ...play, status: isMatch ? 'match' : 'no-match', result: number, bonus: isMatch ? play.stake * DEMO_MULTIPLIER : 0, completedAt: now.toISOString() }
      })
      const bonus = plays.reduce((total, play) => total + (play.sessionId === session.occurrenceId && play.completedAt === now.toISOString() ? play.bonus : 0), 0)
      const result = { id: `${session.occurrenceId}-${Date.now()}`, occurrenceId: session.occurrenceId, sessionId: session.id, sessionName: session.name, time: session.time, number, generatedAt: now.toISOString() }
      return { ...current, account: { ...current.account, balance: current.account.balance + bonus }, results: [result, ...current.results.filter((item) => item.occurrenceId !== session.occurrenceId)].slice(0, 500), plays }
    })
    setFeedback({ type: 'success', text: `${session.name} result generated: ${String(number).padStart(2, '0')}` })
  }, [])

  const submitPlay = useCallback((stake) => {
    const now = new Date()
    const session = getActiveOccurrence(now)
    setState((current) => {
      const result = current.results.find((item) => item.occurrenceId === session.occurrenceId)
      const isMatch = result && result.number === selectedNumber
      const bonus = isMatch ? stake * DEMO_MULTIPLIER : 0
      const play = { id: `play-${Date.now()}`, sessionId: session.occurrenceId, sessionName: session.name, number: selectedNumber, stake, result: result?.number ?? null, status: result ? (isMatch ? 'match' : 'no-match') : 'pending', bonus, createdAt: now.toISOString(), completedAt: result ? now.toISOString() : null }
      return { ...current, account: { ...current.account, balance: current.account.balance - stake + bonus }, plays: [play, ...current.plays].slice(0, 50) }
    })
    setFeedback({ type: 'success', text: 'Virtual play saved to the local demo ledger.' })
    setSelectedNumber(null)
  }, [selectedNumber])

  const resetAccount = useCallback(() => {
    setState(createDefaultDemoState())
    setSelectedNumber(null)
    setFeedback({ type: 'success', text: 'Demo account reset to ₹1,500.' })
  }, [])

  return { state, selectedNumber, setSelectedNumber, feedback, setFeedback, generateResult, submitPlay, resetAccount }
}