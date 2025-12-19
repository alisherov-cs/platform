import { Button, Card, Form, Input } from "antd";
import { useLogin } from "./api/login";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form] = Form.useForm();
  const { mutateAsync: login } = useLogin();
  const navigate = useNavigate();

  const submit = (values) => {
    login(values).then((res) => {
      localStorage.setItem("accessToken", res.data.token);
      navigate("/admin");
    });
  };

  return (
    <div className="h-screen! flex items-center justify-center">
      <Card className="w-1/3">
        <Form form={form} onFinish={submit}>
          <Form.Item name="login" label="Login">
            <Input placeholder="login" />
          </Form.Item>
          <Form.Item name="password" label="Parol">
            <Input placeholder="parol" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Kirish
          </Button>
        </Form>
      </Card>
    </div>
  );
};
