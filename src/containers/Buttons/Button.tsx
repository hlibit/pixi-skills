import { BUTTON_SIZE } from "#/constants";
import { rootStore } from "#/stores";
import { roundedRect } from "#/utils/roundedRect";
import { observer } from "mobx-react-lite";
import type { Graphics } from "pixi.js";
import { useCallback } from "react";

const Button = ({
  complexIndex,
}: {
  complexIndex: { x: number; y: number };
}) => {
  const {
    scene: { width, height, buttonGap },
  } = rootStore;

  const button = useCallback(
    (g: Graphics) => {
      const baseButton = roundedRect(
        g,
        Math.max(width / 8, BUTTON_SIZE.width),
        Math.max(height / 12, BUTTON_SIZE.height),
        60,
      );

      baseButton.fill("red");
    },
    [width, height],
  );
  const btnWidth = Math.max(width / 8, BUTTON_SIZE.width);
  const btnHeight = Math.max(height / 12, BUTTON_SIZE.height);
  const buttonX = (btnWidth + buttonGap) * complexIndex.x;
  const buttonY = (btnHeight + height * 0.02) * complexIndex.y;
  return (
    <pixiContainer x={buttonX} y={buttonY}>
      <pixiGraphics draw={button} />
    </pixiContainer>
  );
};

export default observer(Button);
