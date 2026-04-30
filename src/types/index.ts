export type AppState = {
  selectedItems: any
  total: number
}

export type HistoryState = {
  past: AppState[]
  present: AppState
  future: AppState[]
}

export type Item = {
  id: string
  name: string
  price: number
  category: string
  image?: string
  incompatibleWith: string[]
}

export type BuildState = {
  selectedItems: Item[]
}