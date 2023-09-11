import { useModel } from "@umijs/max";

const Chat = () => {
  useModel("community.user");
  return <div>Chat</div>;
};

export default Chat;
