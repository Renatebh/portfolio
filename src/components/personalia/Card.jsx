import React from "react";
import styles from "../personalia/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <ul>
        <li className={styles["list-items"]}>
          {props.iconAdress}
          &nbsp;
          {props.item1}
        </li>
        <li className={styles["list-items"]}>
          {props.iconMail}
          &nbsp;
          {props.item2}
        </li>
        <li className={styles["list-items"]}>
          {props.iconPhone}
          &nbsp;
          {props.item3}
        </li>
        <li className={styles["list-items"]}>
          &nbsp;
          {props.item4}
        </li>
      </ul>
    </div>
  );
};

export default Card;
