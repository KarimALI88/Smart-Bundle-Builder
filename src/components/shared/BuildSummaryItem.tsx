import { Button, Typography, theme } from "antd"
import { DeleteOutlined, DatabaseOutlined } from "@ant-design/icons"

const { Text } = Typography

interface BuildSummaryItemProps {
  item?: any
  category?: string
  itemName?: string
  price?: number | string
  image?: string
  icon?: React.ReactNode
  onDelete?: () => void
}

const BuildSummaryItem = ({
  item,
  price = 250,
  image,
  icon,
  onDelete,
}: BuildSummaryItemProps) => {
  const { token } = theme.useToken()

  return (
    <div
      className="flex items-center overflow-hidden border border-slate-100 bg-white p-3 hover:bg-slate-50/50 transition-all duration-200 group"
      style={{
        borderLeft: `4px solid ${token.colorPrimary}`,
        borderRadius: "4px 12px 12px 4px",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
        marginBottom: "10px",
      }}
    >
      {/* Icon/Image Container */}
      <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-2xl text-slate-400 overflow-hidden">
        {image ? (
          <img src={image} alt={item?.name} className="h-full w-full object-contain p-1.5" />
        ) : (
          icon || <DatabaseOutlined />
        )}
      </div>

      {/* Details Container */}
      <div className="flex flex-1 flex-col min-w-0">
        <Text type="secondary" className="text-[11px] font-medium leading-[1.2] uppercase tracking-wide opacity-70">
          {item?.category}
        </Text>
        <Text className="truncate text-[15px] font-semibold text-slate-700">
          {item?.name}
        </Text>
      </div>

      {/* Price Section */}
      <div className="mx-2 sm:mx-4 shrink-0">
        <Text className="text-base font-bold text-slate-800">
          ${price}
        </Text>
      </div>

      {/* Delete Action */}
      <Button
        type="text"
        icon={<DeleteOutlined className="text-lg text-slate-300 transition-colors group-hover/btn:text-red-500" />}
        onClick={onDelete}
        className="group/btn h-10 w-10 shrink-0 border-none hover:bg-red-50"
      />
    </div>
  )
}

export default BuildSummaryItem


