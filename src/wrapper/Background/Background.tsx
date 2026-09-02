import { observer } from "mobx-react-lite";
import styles from "./Background.module.scss";
import { rootStore } from "#/stores";
import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH } from "#/constants";
import { clamp } from "#/utils/clamp";
import classNames from "classnames";

const Background = () => {
  const {
    scene: { width, height },
  } = rootStore;
  console.log(...Object.values(BACKGROUND_HEIGHT));
  const safeWidth = clamp(
    width,
    ...(Object.values(BACKGROUND_WIDTH) as [number, number]),
  );
  const safeHeight = clamp(
    height,
    ...(Object.values(BACKGROUND_HEIGHT) as [number, number]),
  );

  return (
    <div className={styles["background"]}>
      <img
        src="/public/background.png"
        alt="background"
        width={safeWidth}
        height={safeHeight}
        className={classNames(styles["background-img"], {
          [styles["background-img-offset-x"]]: width <= 420,
        })}
      />
    </div>
  );
};

export default observer(Background);
