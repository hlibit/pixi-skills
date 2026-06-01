import { observer } from "mobx-react-lite";
import { rootStore } from "../stores";
import { useCallback } from "react";
import { FillGradient, type Graphics } from "pixi.js";

const FILL_GRADIENT: FillGradient = new FillGradient({
  type: "linear",
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  colorStops: [
    { color: "#D8B4FE", offset: 0 },
    { color: "#A855F7", offset: 0.4 },
    { color: "#5B21B6", offset: 1 },
  ],
});

const Background = () => {
  const {
    scene: { width, height },
  } = rootStore;

  const background = useCallback(
    (g: Graphics) => {
      g.clear();

      g.rect(0, 0, width, height).fill(FILL_GRADIENT);
    },
    [width, height],
  );

  return <pixiGraphics draw={background} />;
};

export default observer(Background);
