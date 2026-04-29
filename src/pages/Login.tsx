import { Button, Card, Checkbox, Form, Input, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

type LoginFormValues = {
  email: string
  password: string
  remember?: boolean
}

const Login = () => {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const login = (values: LoginFormValues) => {
    localStorage.setItem("token", values.email)
    setIsAuthenticated(true)
    navigate("/", { replace: true })
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ width: 420 }}>
      <Typography.Title level={3} style={{ marginBottom: 8 }}>
        Login
      </Typography.Title>
      <Typography.Paragraph type="secondary">
        Sign in to continue to Smart Bundle Builder.
      </Typography.Paragraph>

      <Form<LoginFormValues>
        name="login"
        layout="vertical"
        onFinish={login}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email." },
            { type: "email", message: "Enter a valid email address." },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password." }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
      </Card>
    </div>
  )
}

export default Login