export function formatNumber(value) {
  return String(value).padStart(2, '0')
}

export function formatCredits(value) {
  return `₹${Number(value).toLocaleString('en-IN')}`
}

export function randomNumber() {
  return Math.floor(Math.random() * 100)
}

export function formatDateTime(value) {
  return new Date(value).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}