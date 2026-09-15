import { observer } from "mobx-react-lite";
import Background from "../containers/Background";
import Buttons from "../containers/Buttons/Buttons";
import SceneController from "../containers/SceneController";

const Layout = () => {
  return (
    <pixiContainer>
      <Background />
      <Buttons />
      <SceneController />
    </pixiContainer>
  );
};

export default observer(Layout);
