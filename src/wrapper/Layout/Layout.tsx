
import Background from "../Background";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = () => {

  return (
    <div className={styles["layout"]}>
      <h1>kushii.</h1>
      <Background />
      <Header />
    </div>
  );
};

export default Layout;
