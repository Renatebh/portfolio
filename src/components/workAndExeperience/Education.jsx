import React from "react";
import Card from "./Card";
import EducationData from "./data/EducationData";
import HeadingOne from "../headings/HeadingOne";

const Education = () => {
  return (
    <>
      <HeadingOne text="Utdanning" />

      <div>
        {EducationData.map((index, value) => {
          return (
            <Card
              key={value}
              name={index.school}
              title={index.title}
              year={index.year}
              taskOne={index.text.taskOne}
              taskTwo={index.text.taskTwo}
              taskThree={index.text.taskThree}
            />
          );
        })}
      </div>
    </>
  );
};

export default Education;
