import React from "react";
import styles from "../headings/Heading.module.css";

const HeadingOne = (props) => {
  return (
    <div>
      <h1 className={styles["heading-one"]}>{props.text}</h1>
    </div>
  );
};

export default HeadingOne;
