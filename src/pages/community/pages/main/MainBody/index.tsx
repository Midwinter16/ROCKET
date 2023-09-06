import { useEffect, useState } from "react";
import { history } from "umi";

const MainBody = () => {
  const [pathname, setPathname] = useState();
  useEffect(() => {
    return history.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);
  return <div>123</div>;
};
export default MainBody;
