import React from "react";
import styles from "../headings/Heading.module.css";

const HeadingTwo = (props) => {
  return (
    <div>
      <h2 className={styles["heading-two"]}>{props.text}</h2>
    </div>
  );
};

export default HeadingTwo;
