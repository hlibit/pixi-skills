import { observer } from "mobx-react-lite";
import styles from "./Header.module.scss";
import { rootStore } from "#/stores";
import Balance from "../Balance";

const Header = () => {
  const {
    // scene: { width, height },
  } = rootStore;

  return (
    <div className={styles["header"]}>
      <Balance />
    </div>
  );
};

export default observer(Header);
