import React from "react";
import styles from "../workAndExeperience/WorkEducation.module.css";

const Card = (props) => {
  return (
    <div className={styles["workEducation-card"]}>
      <div className={styles["card-year"]}>
        <p className={styles["work-year"]}>{props.year}</p>
      </div>
      <div className={styles["card-info"]}>
        <p className={styles["work-name"]}>{props.title}</p>
        <p className={styles["work-place"]}>{props.name}</p>
        <ul>
          <li className={styles["list-item"]}>-{props.taskOne}</li>
          <li className={styles["list-item"]}>-{props.taskTwo}</li>
          <li className={styles["list-item"]}>-{props.taskThree}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
