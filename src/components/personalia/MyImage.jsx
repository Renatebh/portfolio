import React from "react";
import image from "../../assets/my_image.jpg";
import styles from "../personalia/Personalia.module.css";

const MyImage = () => {
  return (
    <div className={styles["image-container"]}>
      <img src={image} alt="bildet av meg" className={styles.image} />
    </div>
  );
};

export default MyImage;
