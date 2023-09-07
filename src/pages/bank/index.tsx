import zhaoshangyinhangIcon from "@icons/zhaoshangyinhag.svg";
import SIcon from "@/components/SIcon";
import { MockDelay } from "@/utils/utils";
import { Outlet } from "@umijs/max";
import { Suspense, lazy, useState } from "react";
import AD from "./ad";
import { ScreenProtectTime } from "./assets/constants";
import styles from "./index.less";

// 模拟延迟加载主页
// const Lazy = lazy(() =>
//   MockDelay(ScreenProtectTime).then(() => ({ default: Outlet })),
// );
// 模拟延迟加载广告
const LazyAD = lazy(() =>
  MockDelay(ScreenProtectTime).then(() => ({ default: AD })),
);

// 屏保
const ScreenProtect = () => {
  return (
    <div className={styles["bank-body"]}>
      <div className="flex flex-col justify-center" style={{ height: "90%" }}>
        <SIcon
          title="招商银行"
          size="large"
          icon={zhaoshangyinhangIcon}
        ></SIcon>
      </div>
    </div>
  );
};

const Bank = () => {
  const [adClose, setAdClose] = useState(false);
  return (
    <Suspense fallback={<ScreenProtect />}>
      <div className={styles["bank-body"]}>
        {adClose ? (
          <Outlet />
        ) : (
          <LazyAD
            autoClose
            time={(5000 - ScreenProtectTime) / 1000}
            onClose={() => setAdClose(true)}
          />
        )}
      </div>
    </Suspense>
  );
};

export default Bank;
