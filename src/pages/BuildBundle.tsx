
import BuildSummaryItem from "@/components/publicComponents/BuildSummaryItem"
import CategorySection from "@/components/publicComponents/CategorySection"
import KeyShortcut from "@/components/publicComponents/KeyShortcut"
import { DownloadOutlined, UndoOutlined } from "@ant-design/icons"
import { Affix, Button, Col, Row } from "antd"
import { useState } from "react"

const BuildBundle = () => {
  const [items, setItems] = useState([
    {
      "id": "cpu-1",
      "name": "Intel Core i5",
      "price": 220,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-3", "mobo-4"]
    },
    {
      "id": "cpu-2",
      "name": "Intel Core i7",
      "price": 380,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-3", "mobo-4"]
    },
    {
      "id": "cpu-3",
      "name": "AMD Ryzen 5",
      "price": 200,
      "category": "CPU",
      "image": "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      "incompatibleWith": ["mobo-1", "mobo-2"]
    },

    {
      "id": "mobo-1",
      "name": "Intel Basic Board",
      "price": 120,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-3"]
    },
    {
      "id": "mobo-2",
      "name": "Intel High-End Board",
      "price": 200,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-3"]
    },
    {
      "id": "mobo-3",
      "name": "AMD Basic Board",
      "price": 110,
      "category": "Motherboard",
      "image": "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      "incompatibleWith": ["cpu-1", "cpu-2"]
    },

    {
      "id": "ram-1",
      "name": "16GB RAM",
      "price": 70,
      "category": "RAM",
      "image": "https://png.pngtree.com/png-clipart/20220105/ourmid/pngtree-buckle-free-hand-drawn-computer-memory-module-png-image_4080924.png",
      "incompatibleWith": []
    },
    {
      "id": "ram-2",
      "name": "32GB RAM",
      "price": 130,
      "category": "RAM",
      "image": "https://png.pngtree.com/png-clipart/20220105/ourmid/pngtree-buckle-free-hand-drawn-computer-memory-module-png-image_4080924.png",
      "incompatibleWith": []
    }
  ])
  const [selectedItems, setSelectedItems] = useState([])

  const clearBuilds = () => {
    setSelectedItems([])
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
          onClick={clearBuilds}
          className="h-12! rounded-lg! border-slate-200! bg-slate-50! px-3! text-xs! font-medium! text-red-800! shadow-none hover:border-slate-300! hover:bg-slate-100!"
        >
          Clear Build
        </Button>
      </div>
      <hr className="border-gray-300" />
      {/* ---------------------- categories and items--------------------- */}
      <Row gutter={[16, 16]} className="mt-4">
        {/* categories and items */}
        <Col xs={24} lg={17} xl={18}>
          <CategorySection
            title="CPU"
            items={items.filter(i => i.category === "CPU")}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />

          <CategorySection
            title="Motherboard"
            items={items.filter(i => i.category === "Motherboard")}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />

          <CategorySection
            title="RAM"
            items={items.filter(i => i.category === "RAM")}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </Col>
        {/* summary */}
        <Col xs={24} lg={7} xl={6} className="self-start" >
          <Affix offsetTop={16}>
            <div className="min-h-[240px] rounded-xl border border-slate-200 p-4">
              {/* build summary */}
              <h3 className="text-lg font-bold text-slate-800">Build Summary</h3>
              <div className="bg-secondary-100 shadow-2xl my-5 min-h-4 rounded-xl p-2">
                <BuildSummaryItem />
                <BuildSummaryItem />
              </div>
              <div className="my-4">
                <Button type="primary" block icon={<DownloadOutlined />}>
                  Extract PDF
                </Button>
              </div>
              {/* key board shortcuts */}
              <div className="min-h-[240px] rounded-xl border border-slate-200 p-4">
                <h3 className="text-lg font-bold text-slate-800">Key Board Shortcuts</h3>
                <div className="bg-secondary-100 shadow-2xl my-5 min-h-4 rounded-xl p-2">
                  <KeyShortcut title="Undo (Ctrl+Z)" shortcut="Undo (Ctrl+Z)" />
                  <KeyShortcut title="Redo (Ctrl+Y)" shortcut="Redo (Ctrl+Y)" />
                  <KeyShortcut title="Clear Build" shortcut="Del" />
                  <KeyShortcut title="Navigate" shortcut="Tab" />
                  <KeyShortcut title="Select Item" shortcut="Enter / Space" />
                </div>
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  )
}

export default BuildBundle