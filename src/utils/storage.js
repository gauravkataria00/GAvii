import { INITIAL_BALANCE, CURRENCY, STORAGE_KEY } from '../constants/gameConfig'

export function createDefaultDemoState() {
  return { account: { balance: INITIAL_BALANCE, currency: CURRENCY, isDemoAccount: true }, plays: [], results: [] }
}

function isValidState(value) {
  return value && value.account && typeof value.account.balance === 'number' && Array.isArray(value.plays) && Array.isArray(value.results)
}

export function loadDemoState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    if (isValidState(saved)) return saved
  } catch {
    return createDefaultDemoState()
  }
  return createDefaultDemoState()
}

export function saveDemoState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    return true
  } catch {
    return false
  }
}