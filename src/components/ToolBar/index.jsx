import React from "react";
import styles from "./index.module.css";
import { COLORS } from "@/constants";

const ToolBar = () => {
  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
          <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLACK }} />
          <div className={styles.colorBox} style={{ backgroundColor: COLORS.RED }} />
          <div className={styles.colorBox} style={{ backgroundColor: COLORS.YELLOW }} />
          <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLUE }} />
          <div className={styles.colorBox} style={{ backgroundColor: COLORS.GREEN }} />
          <div className={styles.colorBox} style={{ backgroundColor: COLORS.ORANGE }} />
        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size</h4>
        <div className={styles.itemContainer}>
          <input type="range" min={1} max={10} step={1} />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
