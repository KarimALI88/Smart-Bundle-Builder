import BuildSummaryItem from "@/components/publicComponents/BuildSummaryItem"
import CategorySection from "@/components/publicComponents/CategorySection"
import KeyShortcut from "@/components/publicComponents/KeyShortcut"
import { DownloadOutlined, UndoOutlined, RedoOutlined, ClearOutlined } from "@ant-design/icons"
import { Affix, Button, Col, Row } from "antd"
import { useEffect, useState } from "react"
import { useHistory } from "@/hooks/useHistory"

const BuildBundle = () => {

  const [items] = useState([
    {
      id: "cpu-1",
      name: "Intel Core i5",
      price: 220,
      category: "CPU",
      image: "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      incompatibleWith: ["mobo-3", "mobo-4"]
    },
    {
      id: "cpu-2",
      name: "Intel Core i7",
      price: 380,
      category: "CPU",
      image: "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      incompatibleWith: ["mobo-3", "mobo-4"]
    },
    {
      id: "cpu-3",
      name: "AMD Ryzen 5",
      price: 200,
      category: "CPU",
      image: "https://img.magnific.com/premium-vector/processor-cpu-vector-design-template_471203-1174.jpg",
      incompatibleWith: ["mobo-1", "mobo-2"]
    },

    {
      id: "mobo-1",
      name: "Intel Basic Board",
      price: 120,
      category: "Motherboard",
      image: "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      incompatibleWith: ["cpu-3"]
    },
    {
      id: "mobo-2",
      name: "Intel High-End Board",
      price: 200,
      category: "Motherboard",
      image: "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      incompatibleWith: ["cpu-3"]
    },
    {
      id: "mobo-3",
      name: "AMD Basic Board",
      price: 110,
      category: "Motherboard",
      image: "http://png.pngtree.com/png-vector/20230208/ourmid/pngtree-motherboard-vector-icon-design-illustration-png-image_6591858.png",
      incompatibleWith: ["cpu-1", "cpu-2"]
    },

    {
      id: "ram-1",
      name: "16GB RAM",
      price: 70,
      category: "RAM",
      image: "https://png.pngtree.com/png-clipart/20220105/ourmid/pngtree-buckle-free-hand-drawn-computer-memory-module-png-image_4080924.png",
      incompatibleWith: []
    },
    {
      id: "ram-2",
      name: "32GB RAM",
      price: 130,
      category: "RAM",
      image: "https://png.pngtree.com/png-clipart/20220105/ourmid/pngtree-buckle-free-hand-drawn-computer-memory-module-png-image_4080924.png",
      incompatibleWith: []
    }
  ])
  const { history, update, undo, redo } = useHistory({
    selectedItems: []
  })
  const selectedItems = history.present.selectedItems
  const clearBuilds = () => {
    update({ selectedItems: [] })
  }
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault()
        undo()
      }

      if (e.ctrlKey && e.key === "y") {
        e.preventDefault()
        redo()
      }

      if (e.key === "Delete") {
        clearBuilds()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <div>

      {/* action buttons */}
      <div className="flex gap-3 mb-3">

        <Button onClick={undo} icon={<UndoOutlined />}>
          Undo (Ctrl+Z)
        </Button>

        <Button onClick={redo} icon={<RedoOutlined />}>
          Redo (Ctrl+Y)
        </Button>

        <Button onClick={clearBuilds} icon={<ClearOutlined />}>
          Clear Build
        </Button>

      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={17}>

          <CategorySection
            title="CPU"
            items={items.filter(i => i.category === "CPU")}
            selectedItems={selectedItems}
            onChange={(newItems) =>
              update({ selectedItems: newItems })
            }
          />

          <CategorySection
            title="Motherboard"
            items={items.filter(i => i.category === "Motherboard")}
            selectedItems={selectedItems}
            onChange={(newItems) =>
              update({ selectedItems: newItems })
            }
          />

          <CategorySection
            title="RAM"
            items={items.filter(i => i.category === "RAM")}
            selectedItems={selectedItems}
            onChange={(newItems) =>
              update({ selectedItems: newItems })
            }
          />

        </Col>

        <Col xs={24} lg={7}>
          <Affix offsetTop={16}>
            <div className="p-4 border rounded-xl">

              <h3>Build Summary</h3>

              <div className="my-4">
                {selectedItems.map(item => (
                  <BuildSummaryItem key={item.id} item={item} />
                ))}
              </div>

              <Button type="primary" block icon={<DownloadOutlined />}>
                Extract PDF
              </Button>

              {/* key board shortcuts */}
              <div className="min-h-[240px] rounded-xl border border-slate-200 p-4 my-2">
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