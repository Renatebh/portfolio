import React from "react";
import Personalia from "../components/personalia/Personalia";
import Aboutme from "../components/about/Aboutme";
import Work from "../components/workAndExeperience/Work";
import styles from "../pages/Cv.module.css";
import Education from "../components/workAndExeperience/Education";
import Courses from "../components/workAndExeperience/Courses";
import Links from "../components/links/Links";

const Cv = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personalia}>
        <Personalia />
        <Links />
      </div>

      <div className={styles.aboutme}>
        <Aboutme />
      </div>

      <div className={styles.work}>
        <Work />
      </div>

      <div className={styles.education}>
        <Education />
      </div>

      <div className={styles.courses}>
        <Courses />
      </div>
    </div>
  );
};

export default Cv;
