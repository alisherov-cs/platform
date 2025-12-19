import { message } from "antd";

export const MessageProvider = ({ children }) => {
  const [_, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};
