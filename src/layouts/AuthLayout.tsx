import { useState, type ReactNode } from "react";
import SideBar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import { Layout, theme } from "antd";

const { Content } = Layout;

interface AuthLayoutProps {
  children?: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <TopBar />
        <Content className="mx-2 my-2 sm:mx-4">
          <div
            className="p-4 sm:p-6"
            style={{
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}