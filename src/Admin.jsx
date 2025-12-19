import { App, Button, Card, Form, Input, Typography } from "antd";
import { useGetStatistics, useUpdateStatistics } from "./api/statistics";

export const Admin = () => {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const { data: statistics, isLoading, refetch } = useGetStatistics();
  const { mutateAsync: update } = useUpdateStatistics();

  const submit = (values) => {
    update(values).then(() => {
      refetch();
      message.success("Yangilandi");
    });
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-10!">
      <Card>
        <Typography.Title level={3}>Admin</Typography.Title>
      </Card>

      <Card className="mt-4!">
        <Form form={form} onFinish={submit} className="grid grid-cols-2 gap-4">
          <Form.Item
            name={["neighborhood", "total"]}
            label="Jami Mahallalar"
            className="col-span-full!"
            initialValue={statistics?.neighborhood?.total}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["objects", "total"]}
            label="Jami Obyektlar"
            initialValue={statistics?.objects?.total}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["objects", "guard"]}
            label="Qo'riqdagi Obyektlar"
            initialValue={statistics?.objects?.guard}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["underGuard", "total"]}
            label="Qo'riqda Jami"
            initialValue={statistics?.underGuard?.total}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["underGuard", "guard"]}
            label="Qo'riqdagi Xonadonlar"
            initialValue={statistics?.underGuard?.guard}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["apartments", "total"]}
            label="Jami Ko'p qavatli Uylar"
            initialValue={statistics?.apartments?.total}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["apartments", "guard"]}
            label="Qo'riqdagi Ko'p qavatli Uylar"
            initialValue={statistics?.apartments?.guard}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["households", "total"]}
            label="Jami Xonadonlar (ko'p qavatli)"
            initialValue={statistics?.households?.total}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["households", "guard"]}
            label="Qo'riqdagi Xonadonlar (ko'p qavatli)"
            initialValue={statistics?.households?.guard}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["houses", "total"]}
            label="Jami Xovlilar"
            initialValue={statistics?.houses?.total}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["houses", "guard"]}
            label="Qo'riqdagi Xovlilar"
            initialValue={statistics?.houses?.guard}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="col-span-full!">
            Yangilash
          </Button>
        </Form>
      </Card>
    </div>
  );
};
