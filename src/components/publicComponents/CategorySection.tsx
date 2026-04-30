import ProductCard from "./ProductCard"

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
  selectedItem?: Item
  onSelect: (item: Item) => void
  disabledItems?: string[]
}

export default function CategorySection({
  title,
  items,
  selectedItem,
  onSelect,
  disabledItems = [],
}: Props) {
  return (
    <div className="my-12">
      <h3>{title}</h3>

      <div className="flex gap-16 flex-wrap">
        {items.map((item) => {
          const isSelected = selectedItem?.id === item.id
          const isDisabled = disabledItems.includes(item.id)

          return (
            <ProductCard
              key={item.id}
              item={item}
              isSelected={isSelected}
              isDisabled={isDisabled}
              onClick={() => onSelect(item)}
            />
          )
        })}
      </div>
    </div>
  )
}