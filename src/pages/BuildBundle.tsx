import BuildSummaryItem from "@/components/shared/BuildSummaryItem"
import CategorySection from "@/components/shared/CategorySection"
import KeyShortcut from "@/components/shared/KeyShortcut"
import { DownloadOutlined, UndoOutlined, RedoOutlined, ClearOutlined } from "@ant-design/icons"
import { useTotal } from "@/context/TotalContext"
import { Affix, Button, Col, Row } from "antd"
import { useEffect, useState } from "react"
import jsPDF from "jspdf"
import { toPng } from "html-to-image"
// import { useItems } from "@/hooks/items/useItems"

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
      price: 600,
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

  // const {data: items, isPending, error} = useItems()
  const { update, undo, redo, selectedItems, total } = useTotal()
  const [isExtracting, setIsExtracting] = useState(false)

  console.log("the items in bundle", items)

  const handleExtractPDF = async () => {
    const element = document.getElementById("build-summary-content")
    if (element) {
      setIsExtracting(true)
      try {
        const dataUrl = await toPng(element, { backgroundColor: '#ffffff', pixelRatio: 2 })
        const pdf = new jsPDF("p", "mm", "a4")
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (element.offsetHeight * pdfWidth) / element.offsetWidth
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight)
        pdf.save("build-summary.pdf")
      } catch (err) {
        console.error("Failed to generate PDF", err)
      } finally {
        setIsExtracting(false)
      }
    }
  }


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

  // if (isPending) return <div>Loading...</div>

  // if (error) return <div>Error try after some minutes</div>

  return (
    <div>

      {/* action buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">

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
            items={items?.filter(i => i.category === "CPU")}
            selectedItems={selectedItems}
            onChange={(newItems) =>
              update({ selectedItems: newItems })
            }
          />

          <CategorySection
            title="Motherboard"
            items={items?.filter(i => i.category === "Motherboard")}
            selectedItems={selectedItems}
            onChange={(newItems) =>
              update({ selectedItems: newItems })
            }
          />

          <CategorySection
            title="RAM"
            items={items?.filter(i => i.category === "RAM")}
            selectedItems={selectedItems}
            onChange={(newItems) =>
              update({ selectedItems: newItems })
            }
          />

        </Col>

        <Col xs={24} lg={7}>
          <Affix offsetTop={16}>
            <div className="p-4 border rounded-xl">
              <div id="build-summary-content" className="bg-white">
                <h3>Build Summary</h3>

                <div className="my-4">
                  {selectedItems.map(item => (
                    <BuildSummaryItem key={item.id} item={item} />
                  ))}
                </div>

                <div>
                  <p className="text-lg font-bold text-black">Total <span className="text-slate-500 text-md font-semibold">{total}</span></p>
                </div>
              </div>

              <Button
                type="primary"
                block
                icon={<DownloadOutlined />}
                disabled={selectedItems.length === 0}
                onClick={handleExtractPDF}
                loading={isExtracting}
                className="mt-4"
              >
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