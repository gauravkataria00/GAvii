import { useState } from 'react'
import { DEMO_MULTIPLIER } from '../constants/gameConfig'
import { formatCredits, formatNumber } from '../utils/gameUtils'
import Icon from './Icon'
import PresetAmountButtons from './PresetAmountButtons'

export default function VirtualPlayPanel({ selectedNumber, balance, onSubmit, isSubmitting }) {
  const [stake, setStake] = useState('100')
  const [error, setError] = useState('')
  const submit = (event) => {
    event.preventDefault()
    const amount = Number(stake)
    if (selectedNumber === null) return setError('Choose a number before submitting.')
    if (!Number.isInteger(amount) || amount <= 0) return setError('Enter a whole-number stake greater than ₹0.')
    if (amount > balance) return setError('Stake cannot exceed your available demo credits.')
    setError('')
    onSubmit(amount)
  }
  return <section className="play-panel" aria-labelledby="play-title"><div className="play-panel-heading"><div><span className="step-number">2</span><div><p className="eyebrow">Next step</p><h2 id="play-title">Select Virtual Amount</h2></div></div><span className="multiplier">×{DEMO_MULTIPLIER} demo bonus</span></div><form onSubmit={submit}><div className="chosen-number"><span>Your number</span><strong>{selectedNumber === null ? '--' : formatNumber(selectedNumber)}</strong></div><label htmlFor="stake">Virtual amount</label><div className="input-wrap"><span>₹</span><input id="stake" type="number" min="1" step="1" value={stake} onChange={(event) => setStake(event.target.value)} aria-describedby="stake-help" disabled={isSubmitting} /></div><PresetAmountButtons value={stake} onChange={setStake} /><p id="stake-help" className="helper">Available: {formatCredits(balance)} virtual credits</p>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary play-submit" type="submit" disabled={isSubmitting}><span>{isSubmitting ? 'SAVING PLAY…' : 'PLAY DEMO'}</span><Icon>{isSubmitting ? '◌' : '→'}</Icon></button></form></section>
}