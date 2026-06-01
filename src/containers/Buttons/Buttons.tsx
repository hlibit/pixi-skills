import { observer } from "mobx-react-lite";
import Button from "./Button";
import { rootStore } from "#/stores";
import { BUTTON_COUNT, BUTTON_SIZE } from "#/constants";
import { useEffect, useRef } from "react";
import { Container } from "pixi.js";

const Buttons = () => {
  const {
    scene: { width, height, buttonGap, setSceneY },
  } = rootStore;

  const containerRef = useRef<Container | null>(null);

  const containerWidth = width * 0.8;
  const buttonWidth = Math.max(width / 8, BUTTON_SIZE.width);

  const buttonAmountInRow = Math.max(
    Math.floor((containerWidth + buttonGap) / (buttonWidth + buttonGap)),
    1,
  );

  const buttonsInFirstRow = Math.min(BUTTON_COUNT, buttonAmountInRow);
  const fillingSpace =
    buttonsInFirstRow * buttonWidth + (buttonsInFirstRow - 1) * buttonGap;

  const startY = height / 4;

  const complexIndex = (index: number) => ({
    x: index % buttonAmountInRow,
    y: Math.floor(index / buttonAmountInRow),
  });

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
      {Array.from({ length: BUTTON_COUNT }).map((_, index) => (
        <Button key={index} complexIndex={complexIndex(index)} />
      ))}
    </pixiContainer>
  );
};

export default observer(Buttons);
