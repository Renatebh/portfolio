import React from "react";
import styles from "../personalia/Personalia.module.css";

const CardSome = (props) => {
  return (
    <div className={styles["some-container"]}>
      <a
        className={styles["some-logoes"]}
        href="https://www.linkedin.com/in/renate-hem/"
      >
        {props.iconLin}
      </a>
      <a
        className={styles["some-logoes"]}
        href="https://www.facebook.com/renate.hem"
      >
        {props.iconFa}
      </a>
      <a
        className={styles["some-logoes"]}
        href="https://www.instagram.com/renatehem/"
      >
        {props.iconIns}
      </a>
    </div>
  );
};

export default CardSome;
