import STopBar from "@/components/STopBar";
import { history } from "@umijs/max";
import { NotificationList } from "../../constants";

const Notification = () => {
  const onChange = (path: string) =>
    history.push(`/community/notification/${path}`);
  return (
    <div>
      <STopBar
        data={NotificationList}
        module="notification"
        onChange={onChange}
      ></STopBar>
    </div>
  );
};

export default Notification;
