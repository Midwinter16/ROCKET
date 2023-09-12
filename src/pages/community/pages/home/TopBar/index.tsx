import STopBar from "@/components/STopBar";
import { BarList } from "@/pages/community/constants";
import { history } from "@umijs/max";

const TopBar = () => {
  const onChange = (path: string) => history.push(`/community/home/${path}`);
  return (
    <STopBar
      data={BarList}
      module={window.location.pathname.split("/")[3]}
      onChange={onChange}
    ></STopBar>
  );
};

export default TopBar;
