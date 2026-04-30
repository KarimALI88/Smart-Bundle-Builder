import { Card, Radio, Tag, Typography } from "antd"
import { CloseSquareOutlined } from "@ant-design/icons"

type Item = {
  id: string
  name: string
  price: number
  category: string
  image?: string
}

type ProductCardProps = {
  item: Item
  isSelected: boolean
  isDisabled?: boolean
  isOverBudget?: boolean
  onClick: (item: Item) => void
}

const ProductCard = ({
  item,
  isSelected,
  isDisabled = false,
  isOverBudget = false,
  onClick
}: ProductCardProps) => {
  return (
    <Card
      hoverable={!isDisabled || isOverBudget}
      tabIndex={isDisabled ? -1 : 0}
      role="radio"
      aria-checked={isSelected}
      aria-disabled={isDisabled || isOverBudget}
      onClick={() => !isDisabled && !isOverBudget && onClick(item)}
      onKeyDown={(e) => {
        if (isDisabled || isOverBudget) return
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick(item)
        }
      }}
      className={`w-[250px] rounded-xl border transition-all
        ${isSelected ? "border-blue-500 shadow-[0_0_0_1px_#3b82f6]" : "border-slate-200"}
        ${isDisabled || isOverBudget ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
        focus:outline-none focus:ring-2 focus:ring-blue-500
      `}
      bodyStyle={{ padding: 12 }}
    >
      <div className="flex items-start justify-between">
        <Radio checked={isSelected} disabled={isDisabled || isOverBudget} />

        {isDisabled && (
          <Tag color="error" className="m-0 rounded-full text-[10px] font-semibold">
            Incompatible
          </Tag>
        )}

        {isOverBudget && (
          <Tag color="error" className="m-0 rounded-full text-[10px] font-semibold">
            Will exceed 1000$
          </Tag>
        )}
      </div>

      <div className="mt-2 flex gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-50 p-1">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <CloseSquareOutlined className="text-xl text-slate-300" />
          )}
        </div>

        <div className="min-w-0">
          <Typography.Text className="block truncate text-sm font-semibold text-slate-700">
            {item.name}
          </Typography.Text>

          <Typography.Paragraph
            className="m-0 mt-1 text-xs text-slate-400"
            ellipsis={{ rows: 2, tooltip: item.name }}
          >
            Great performance for your build.
          </Typography.Paragraph>

          <Typography.Text className="mt-1 block text-lg font-semibold text-blue-600">
            ${item.price}
          </Typography.Text>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard