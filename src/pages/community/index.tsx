import { Outlet } from "@umijs/max";
import Header from "./pages/main/Header";

const Community = () => {
  return (
    <div
      style={{ height: "calc(100vh - 56px - 20px )", boxSizing: "border-box" }}
    >
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Community;
