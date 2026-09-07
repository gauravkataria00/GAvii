import { useEffect } from 'react'
import { saveDemoState } from '../utils/storage'

export function usePersistedDemoState(state, onStorageError) {
  useEffect(() => {
    if (!saveDemoState(state)) onStorageError()
  }, [state, onStorageError])
}