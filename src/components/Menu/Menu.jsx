import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.css"; // Import the CSS module after the Font Awesome imports

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;