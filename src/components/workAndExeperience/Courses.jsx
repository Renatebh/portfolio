import React from "react";
import CoursesData from "./data/CoursesData";
import HeadingOne from "../headings/HeadingOne";
import styles from "../workAndExeperience/WorkEducation.module.css";

const Courses = () => {
  return (
    <>
      <HeadingOne text="Kurs" />

      <div>
        {CoursesData.map((index, value) => {
          return (
            <div key={value} className={styles["course-card"]}>
              <li className={styles["course-year"]}>{index.year}</li>
              <li className={styles["course-name"]}>{index.course}</li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
