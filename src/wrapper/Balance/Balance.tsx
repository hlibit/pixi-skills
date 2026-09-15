import type { FC } from "react";
import styles from "./Balance.module.scss";
import LiquidBox from "../LiquidBox";

interface BalanceProps {}

const Balance: FC<BalanceProps> = () => {
  return (
    <LiquidBox>
      <div className={styles["balance"]}>
        <span>💸</span>
        <span className={styles["balance-amount"]}>1000</span>
      </div>
    </LiquidBox>
  );
};

export default Balance;
