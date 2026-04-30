export type AppState = {
  selectedItems: any
  total: number
}

export type HistoryState = {
  past: AppState[]
  present: AppState
  future: AppState[]
}