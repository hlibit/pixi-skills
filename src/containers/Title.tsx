import { rootStore } from "#/stores";
import { observer } from "mobx-react-lite";

const Title = () => {
  const {
    scene: { width, height },
  } = rootStore;
  return (
    <pixiText
      style={{ fontSize: 40 }}
      text={"kushii."}
      x={width / 2}
      y={height * 0.05}
      anchor={{ x: 0.5, y: 0 }}
    />
  );
};

export default observer(Title);
