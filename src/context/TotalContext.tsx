import { createContext, useContext, useMemo } from "react"
import type { Item } from "@/types"
import { calculateTotal } from "@/utils/calculateTotal"
import { useHistory } from "@/hooks/useHistory"

type TotalContextType = {
  selectedItems: Item[]
  total: number
  update: (newState: { selectedItems: Item[] }) => void
  undo: () => void
  redo: () => void
}

const TotalContext = createContext<TotalContextType | null>(null)

export const TotalProvider = ({ children }: any) => {
  const { history, update, undo, redo } = useHistory({
    selectedItems: [] as Item[]
  })

  const selectedItems = history.present.selectedItems
  const total = useMemo(() => calculateTotal(selectedItems), [selectedItems])

  const contextValue = useMemo(() => ({
    selectedItems,
    total,
    update,
    undo,
    redo
  }), [selectedItems, total, update, undo, redo])

  return (
    <TotalContext.Provider value={contextValue}>
      {children}
    </TotalContext.Provider>
  )
}

export const useTotal = () => {
  const ctx = useContext(TotalContext)
  if (!ctx) throw new Error("useTotal must be used inside provider")
  return ctx
}