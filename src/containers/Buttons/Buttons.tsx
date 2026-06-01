import { observer } from "mobx-react-lite";
import Button from "./Button";
import { rootStore } from "#/stores";
import { BUTTON_COUNT } from "#/constants";
import { useEffect, useRef } from "react";
import { Container } from "pixi.js";

const complexIndex = (index: number, buttonAmountInRow: number) => ({
  x: index % buttonAmountInRow,
  y: Math.floor(index / buttonAmountInRow),
});

const Buttons = () => {
  const {
    scene: {
      width,
      height,
      buttonGap,
      setSceneY,
      buttonParameters: { width: buttonWidth },
    },
  } = rootStore;

  const containerRef = useRef<Container | null>(null);

  const containerWidth = width * 0.8;

  const buttonAmountInRow = Math.max(
    Math.floor((containerWidth + buttonGap) / (buttonWidth + buttonGap)),
    1,
  );

  const buttonsInFirstRow = Math.min(BUTTON_COUNT, buttonAmountInRow);
  const fillingSpace =
    buttonsInFirstRow * buttonWidth + (buttonsInFirstRow - 1) * buttonGap;

  const startY = height / 4;

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.height || 0;
      setSceneY(startY, containerHeight);
    }
  }, [startY, width, height, setSceneY]);

  return (
    <pixiContainer
      ref={containerRef}
      x={width / 2}
      y={startY}
      pivot={{ x: fillingSpace / 2 - buttonWidth / 2, y: 0 }}
    >
      {Array.from({ length: BUTTON_COUNT }, (_, index) => (
        <Button
          key={index}
          title={`${index + 1}`}
          complexIndex={complexIndex(index, buttonAmountInRow)}
        />
      ))}
    </pixiContainer>
  );
};

export default observer(Buttons);
