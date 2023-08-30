import { Outlet } from "@umijs/max";
import styles from './index.less'

const Bank = () => {
  return (
    <div className={styles.bankBody}>
      <Outlet />
    </div>
  );
};

export default Bank;
