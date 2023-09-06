import { Outlet } from "@umijs/max";

const Community = () => {
  return (
    <div
      style={{ height: "calc(100vh - 56px - 20px )", boxSizing: "border-box" }}
    >
      <Outlet />
    </div>
  );
};

export default Community;
