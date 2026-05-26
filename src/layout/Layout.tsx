import { observer } from "mobx-react-lite";
import { rootStore } from "../stores";

const Layout = () => {
  const {
    scene: { width, height },
  } = rootStore;
  console.log(width, height);

  return <pixiContainer></pixiContainer>;
};

export default observer(Layout);
