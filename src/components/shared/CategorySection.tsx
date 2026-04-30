import ProductCard from "./ProductCard"
import { useTotal } from "@/context/TotalContext"

type Item = {
  id: string
  name: string
  price: number
  category: string
  image?: string
  incompatibleWith: string[]
}

type Props = {
  title: string
  items: Item[]
  selectedItems: Item[]
  onChange: (items: Item[]) => void
}

export default function CategorySection({
  title,
  items,
  selectedItems,
  onChange
}: Props) {
  const { total } = useTotal()

  const handleSelect = (item: Item) => {
    const alreadyExist = selectedItems.some(i => i.id === item.id)

    let newItems: Item[]

    if (alreadyExist) {
      newItems = selectedItems.filter(i => i.id !== item.id)
    } else {
      const filtered = selectedItems.filter(i => i.category !== item.category)
      newItems = [...filtered, item]
    }

    onChange(newItems)
  }

  return (
    <div className="my-12">
      <h3>{title}</h3>

      <div className="flex gap-16 flex-wrap">
        {items.map((item) => {
          const isSelected = selectedItems.some(i => i.id === item.id)

          const isDisabled = selectedItems.some(i =>
            i.incompatibleWith?.includes(item.id)
          )

          let isOverBudget = false
          if (!isSelected) {
            const currentCatSelected = selectedItems.find(i => i.category === item.category)
            const currentCatPrice = currentCatSelected ? currentCatSelected.price : 0
            const newTotal = total - currentCatPrice + item.price
            isOverBudget = newTotal > 1000
          }

          return (
            <ProductCard
              key={item.id}
              item={item}
              isSelected={isSelected}
              isDisabled={isDisabled}
              isOverBudget={isOverBudget}
              onClick={() => handleSelect(item)}
            />
          )
        })}
      </div>
    </div>
  )
}