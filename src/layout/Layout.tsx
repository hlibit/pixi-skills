import { observer } from "mobx-react-lite";
import Background from "../containers/Background";
import Buttons from "../containers/Buttons/Buttons";
import SceneController from "../containers/SceneController";
import Title from "#/containers/Title";

const Layout = () => {
  return (
    <pixiContainer>
      <Background />
      <Title />
      <Buttons />
      <SceneController />
    </pixiContainer>
  );
};

export default observer(Layout);
