import React from "react";
import styles from "../personalia/Card.module.css";

const CardSkills = (props) => {
  return (
    <div className={styles["card-skills"]}>
      <ul>
        <li className={styles["list-items"]}>
          {props.iconHTML}
          &nbsp;
          {props.item1}
        </li>
        <li className={styles["list-items"]}>
          {props.iconCSS}
          &nbsp;
          {props.item2}
        </li>
        <li className={styles["list-items"]}>
          {props.iconJs}
          &nbsp;
          {props.item3}
        </li>
        <li className={styles["list-items"]}>
          {props.iconReact}
          &nbsp;
          {props.item4}
        </li>
        <li className={styles["list-items"]}>
          {props.iconXD}
          &nbsp;
          {props.item5}
        </li>
        <li className={styles["list-items"]}>
          {props.iconGit}
          &nbsp;
          {props.item6}
        </li>
        <li className={styles["list-items"]}>
          {props.iconGH}
          &nbsp;
          {props.item7}
        </li>
      </ul>
    </div>
  );
};

export default CardSkills;
