import { Layout } from "antd"
import type { ReactNode } from "react"

const { Content } = Layout

interface AuthLayoutProps {
  children?: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Content>
    </Layout>
  )
}