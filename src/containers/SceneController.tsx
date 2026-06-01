import { observer } from "mobx-react-lite";
import type { Graphics } from "pixi.js";
import { rootStore } from "../stores";
import { useCallback } from "react";
import { roundedRect } from "../utils/roundedRect";

const SceneController = () => {
  const {
    scene: { width, height, sceneY },
  } = rootStore;

  const sceneWrapper = useCallback(
    (g: Graphics) => {
      const sceneWidth = width / 1.5;
      const sceneHeight = height / 2;

      roundedRect(g, sceneWidth, sceneHeight, undefined)
        .fill("black")
        .stroke({ width: 3, color: "purple" });
    },
    [width, height],
  );

  return (
    <pixiContainer x={width / 2} y={sceneY}>
      <pixiGraphics draw={sceneWrapper} />
    </pixiContainer>
  );
};

export default observer(SceneController);
