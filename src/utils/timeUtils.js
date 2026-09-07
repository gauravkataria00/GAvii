import { SESSIONS } from '../constants/gameConfig'

function dateKey(date) {
  return date.toISOString().slice(0, 10)
}

export function getOccurrence(session, date) {
  const scheduledAt = new Date(date)
  scheduledAt.setHours(session.hour, 0, 0, 0)
  return { ...session, scheduledAt, occurrenceId: `${dateKey(scheduledAt)}-${session.id}` }
}

export function getActiveOccurrence(now = new Date()) {
  const todaysSessions = SESSIONS.map((session) => getOccurrence(session, now))
  const active = todaysSessions.filter((session) => session.scheduledAt <= now).at(-1)
  if (active) return active
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  return getOccurrence(SESSIONS.at(-1), yesterday)
}

export function getNextOccurrence(now = new Date()) {
  const next = SESSIONS.map((session) => getOccurrence(session, now)).find((session) => session.scheduledAt > now)
  if (next) return next
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return getOccurrence(SESSIONS[0], tomorrow)
}

export function getTodayOccurrences(now = new Date()) {
  return SESSIONS.map((session) => getOccurrence(session, now))
}

export function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000))
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}