import { preferZhuyin } from './i18n'
import type { InputMode, TriesMeta } from './logic'
import { key } from './state'

export const legacyTries = useStorage<Record<string, string[]>>('handle-tries', {})

export const initialized = useStorage('handle-initialized', false)
export const history = useStorage<Record<string, TriesMeta>>('handle-tries-meta', {})
export const inputMode = useStorage<InputMode>('handle-mode', preferZhuyin ? 'zy' : 'py')
export const useNumberTone = useStorage('handle-number-tone', false)
export const colorblind = useStorage('handle-colorblind', false)

export const meta = computed<TriesMeta>({
  get() {
    if (!(key in history.value))
      history.value[key] = {}
    return history.value[key]
  },
  set(v) {
    history.value[key] = v
  },
})

export const tries = computed<string[]>({
  get() {
    if (!meta.value.tries)
      meta.value.tries = []
    return legacyTries.value[key] || meta.value.tries
  },
  set(v) {
    meta.value.tries = v
  },
})

export function markStart() {
  if (meta.value.end)
    return
  if (!meta.value.start)
    meta.value.start = Date.now()
}

export function markEnd() {
  if (meta.value.end)
    return

  if (!meta.value.duration)
    meta.value.duration = 0

  meta.value.end = Date.now()
  if (meta.value.start)
    meta.value.duration += meta.value.end - meta.value.start
}

export function onPause() {
  if (meta.value.end)
    return

  if (!meta.value.duration)
    meta.value.duration = 0

  if (meta.value.start) {
    meta.value.duration += Date.now() - meta.value.start
    meta.value.start = undefined
  }
}

export const gamesCount = computed(() => Object.values(history.value).filter(m => m.passed || m.answer || m.failed).length)
export const passedCount = computed(() => Object.values(history.value).filter(m => m.passed).length)
export const noHintPassedCount = computed(() => Object.values(history.value).filter(m => m.passed && !m.hint).length)
export const historyTriesCount = computed(() => Object.values(history.value).filter(m => m.passed || m.answer || m.failed).map(m => m.tries?.length || 0).reduce((a, b) => a + b, 0))

export const triesCount = computed(() => tries.value.length)
export const averageDurations = computed(() => {
  const items = Object.values(history.value).filter(m => m.passed && m.duration)
  if (!items.length)
    return 0
  const durations = items.map(m => m.duration!).reduce((a, b) => a + b, 0)
  const ts = durations / items.length / 1000
  const m = Math.floor(ts / 60)
  const s = Math.round(ts % 60)
  if (m)
    return `${m}m${s}s`
  return `${s}s`
})
