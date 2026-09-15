import type { FC, ReactNode } from "react";
import styles from "./LiquidBox.module.scss";

interface LiquidBoxProps {
  children: ReactNode;
}
const LiquidBox: FC<LiquidBoxProps> = ({ children }) => {
  return <div className={styles["box"]}>{children}</div>;
};

export default LiquidBox;
