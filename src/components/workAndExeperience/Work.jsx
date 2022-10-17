import React from "react";
import WorkData from "./data/WorkData";
import Card from "./Card";
import HeadingOne from "../headings/HeadingOne";

const Work = () => {
  return (
    <>
      <HeadingOne text="Arbeid" />
      <div>
        {WorkData.map((index, value) => {
          console.log(WorkData);
          return (
            <Card
              key={value}
              name={index.company}
              title={index.jobTitle}
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

export default Work;
