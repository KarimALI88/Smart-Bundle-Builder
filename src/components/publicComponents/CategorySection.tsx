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
  selectedItems?: any
  setSelectedItems?: any
}

export default function CategorySection({
  title,
  items,
  selectedItems,
  setSelectedItems
}: Props) {

  const handleSelect = (item: Item) => {
    const alreadyExist = selectedItems?.some((i: any) => i.id === item.id)
    if (alreadyExist) {
      setSelectedItems((prev: any) => {
        return [
          prev.filter((i: any) => i.id !== item.id)
        ]
      })
    } else {
      setSelectedItems((prev: any) => {
        return [
          ...prev,
          item
        ]
      })
    }
  }

  return (
    <div className="my-12">
      <h3>{title}</h3>

      <div className="flex gap-16 flex-wrap">
        {items.map((item) => {
          const isSelected = selectedItems?.some((i: any) => i.id === item.id)
          const isDisabled = selectedItems?.some((i: any) => i.incompatibleWith?.includes(item.id))
          
          return (
            <ProductCard
              key={item.id}
              item={item}
              isSelected={isSelected}
              isDisabled={isDisabled}
              onClick={(item: Item) => handleSelect(item)}
            />
          )
        })}
      </div>
    </div>
  )
}