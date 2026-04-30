import {
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";

const { Sider } = Layout;
const { Title, Text } = Typography;

interface SideBarProps {
  collapsed: boolean;
  onCollapse: (value: boolean) => void;
}

const menuItems = [
  { key: "profile", icon: <UserOutlined />, label: "My Profile" },
  { key: "shop", icon: <ShopOutlined />, label: "Shop" },
  { key: "orders", icon: <ShoppingCartOutlined />, label: "My Orders" },
  { key: "settings", icon: <SettingOutlined />, label: "Settings" },
];

const SideBar = ({ collapsed, onCollapse }: SideBarProps) => {
  return (
    <Sider
      width={260}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      theme="dark"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        height: "100vh",
        borderRight: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="px-4 py-6">
        <Title
          level={4}
          style={{ color: "#fff", margin: 0, lineHeight: 1.2 }}
          ellipsis
        >
          {collapsed ? "SBB" : "Smart Bundle"}
        </Title>
        {!collapsed && (
          <Text style={{ color: "rgba(255,255,255,0.65)" }}>
            Builder Dashboard
          </Text>
        )}
      </div>

      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["shop"]}
        items={menuItems}
        style={{ borderInlineEnd: 0, paddingInline: 8 }}
      />
    </Sider>
  );
};

export default SideBar;
