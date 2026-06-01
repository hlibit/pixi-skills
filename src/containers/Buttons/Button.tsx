import { COLORS } from "#/colors";
import { rootStore } from "#/stores";
import { roundedRect } from "#/utils/roundedRect";
import { observer } from "mobx-react-lite";
import { TextStyle, type Graphics } from "pixi.js";
import { useCallback, useState } from "react";

const style = new TextStyle({
  fill: "#FFFFFF",
  fontSize: 20,
  fontFamily: "Arial",
  fontWeight: "700",
});

const Button = ({
  title,
  complexIndex,
}: {
  complexIndex: { x: number; y: number };
  title: string;
}) => {
  const {
    scene: { height, buttonGap, buttonParameters },
  } = rootStore;

  const [state, setState] = useState<"default" | "hover">("default");

  const button = useCallback(
    (g: Graphics) => {
      const baseButton = roundedRect(
        g,
        buttonParameters.width,
        buttonParameters.height,
        60,
      );

      baseButton.fill(COLORS.button.states[state]).stroke({
        color: COLORS.button.secondary,
        width: 2,
      });

      baseButton.cursor = state === "default" ? "default" : "pointer";
    },
    [buttonParameters, state],
  );

  const onEnter = useCallback(() => setState("hover"), []);
  const onLeave = useCallback(() => setState("default"), []);

  const buttonX = (buttonParameters.width + buttonGap) * complexIndex.x;
  const buttonY = (buttonParameters.height + height * 0.02) * complexIndex.y;
  return (
    <pixiContainer x={buttonX} y={buttonY}>
      <pixiGraphics
        draw={button}
        eventMode="static"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      />
      <pixiText text={title} anchor={0.5} style={style} />
    </pixiContainer>
  );
};

export default observer(Button);
