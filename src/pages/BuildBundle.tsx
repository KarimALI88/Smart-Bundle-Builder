
import CategorySection from "@/components/publicComponents/CategorySection"
import { UndoOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useState } from "react"

const BuildBundle = () => {
  const [items, setItems] = useState([
    {
      "id": "cpu-1",
      "name": "Intel Core i5-12400F",
      "price": 250,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-3", "mobo-4"]
    },
    {
      "id": "cpu-2",
      "name": "Intel Core i7-12700K",
      "price": 400,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-3", "mobo-4"]
    },
    {
      "id": "cpu-3",
      "name": "AMD Ryzen 5 5600X",
      "price": 220,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-1", "mobo-2"]
    },
    {
      "id": "cpu-4",
      "name": "AMD Ryzen 7 5800X",
      "price": 350,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-1", "mobo-2"]
    },





    {
      "id": "mobo-1",
      "name": "ASUS Prime Intel B660",
      "price": 150,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-3", "cpu-4"]
    },
    {
      "id": "mobo-2",
      "name": "MSI Intel Z690",
      "price": 200,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-3", "cpu-4"]
    },
    {
      "id": "mobo-3",
      "name": "Gigabyte AMD B550",
      "price": 140,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-1", "cpu-2"]
    },
    {
      "id": "mobo-4",
      "name": "ASRock AMD X570",
      "price": 220,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-1", "cpu-2"]
    },






    {
      "id": "ram-1",
      "name": "16GB DDR4 3200MHz",
      "price": 80,
      "category": "RAM",
      "image": "https://png.pngtree.com/png-clipart/20220105/ourmid/pngtree-buckle-free-hand-drawn-computer-memory-module-png-image_4080924.png",
      "incompatibleWith": []
    },
    {
      "id": "ram-2",
      "name": "32GB DDR4 3600MHz",
      "price": 150,
      "category": "RAM",
      "image": "https://png.pngtree.com/png-clipart/20220105/ourmid/pngtree-buckle-free-hand-drawn-computer-memory-module-png-image_4080924.png",
      "incompatibleWith": []
    }
  ])
  const [selectedItem, setSelectedItem] = useState({})

  const handleSelect = (item: any) => {
    console.log("selected item", item)
  }
  return (
    <div className="">
      {/* action buttons (undo - redo - clear build) */}
      <div className="flex items-center gap-3 mb-3">
        {/* undo */}
        <Button
          type="default"
          icon={<UndoOutlined className="text-[12px] text-slate-400" />}
          className="h-12! rounded-lg! border-slate-200! bg-slate-50! px-3! text-xs! font-medium! text-slate-500! shadow-none hover:border-slate-300! hover:bg-slate-100!"
        >
          Undo (Ctrl+Z)
        </Button>
        {/* redo */}
        <Button
          type="default"
          icon={<UndoOutlined className="text-[12px] text-slate-400" />}
          className="h-12! rounded-lg! border-slate-200! bg-slate-50! px-3! text-xs! font-medium! text-slate-500! shadow-none hover:border-slate-300! hover:bg-slate-100!"
        >
          Redo (Ctrl+Y)
        </Button>
        {/* clear build */}
        <Button
          type="default"
          icon={<UndoOutlined className="text-[12px] text-red-800!" />}
          className="h-12! rounded-lg! border-slate-200! bg-slate-50! px-3! text-xs! font-medium! text-red-800! shadow-none hover:border-slate-300! hover:bg-slate-100!"
        >
          Clear Build
        </Button>
      </div>
      <hr className="border-gray-300" />
      {/* ---------------------- categories and items--------------------- */}
      <CategorySection
        title="CPU"
        items={items.filter(i => i.category === "CPU")}
        selectedItem={selectedItem["CPU"]}
        onSelect={handleSelect}
      />

      <CategorySection
        title="Motherboard"
        items={items.filter(i => i.category === "Motherboard")}
        selectedItem={selectedItem["Motherboard"]}
        onSelect={handleSelect}
      />

      <CategorySection
        title="RAM"
        items={items.filter(i => i.category === "RAM")}
        selectedItem={selectedItem["RAM"]}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default BuildBundle