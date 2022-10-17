import React from "react";
import MyImage from "./MyImage";
import Card from "./Card";
import MyPersonaliaData from "./data/MyPersonaliaData";
import MySkillsData from "./data/MySkillsData";
import HeadingTwo from "../headings/HeadingTwo";
import InterestsData from "./data/InterestsData";
import LanguageData from "./data/LanguageData";
import SosialData from "./data/SosialData";
import CardSome from "./CardSome";
import styles from "./Personalia.module.css";
import CardSkills from "./CardSkills";
import { Link } from "react-router-dom";
import Links from "../links/Links";

const Personalia = () => {
  return (
    <>
      {/* <div className={styles["personalia-container"]}> */}
      <MyImage />
      <div className={styles["top-personal"]}>
        <h3>Renate Hem</h3>
        <p>Frontend-devloper Student</p>
      </div>
      <div className={styles.personal}>
        <HeadingTwo text="Kontakt" />
        {MyPersonaliaData.map((ind, val) => {
          return (
            <Card
              key={val}
              item1={ind.adress}
              item2={ind.email}
              item3={ind.phone}
              iconPhone={ind.iconPhone}
              iconMail={ind.iconMail}
              iconAdress={ind.iconAdress}
            />
          );
        })}
      </div>
      <div className={styles.skills}>
        <HeadingTwo text="Ferdigheter" />

        {MySkillsData.map((ind) => {
          return (
            <CardSkills
              key={ind}
              item1={ind.skillOne}
              item2={ind.skillTwo}
              item3={ind.skillThree}
              item4={ind.skillFour}
              item5={ind.skillFive}
              item6={ind.skillSix}
              item7={ind.skillSeven}
              iconHTML={ind.iconHtml}
              iconCSS={ind.iconCSS}
              iconGH={ind.iconGH}
              iconGit={ind.iconGit}
              iconJs={ind.iconJs}
              iconReact={ind.iconReact}
              iconXD={ind.iconXD}
            />
          );
        })}
      </div>

      <div className={styles.interests}>
        <HeadingTwo text="Interesser" />

        {InterestsData.map((ind) => {
          return (
            <Card
              key={ind}
              item1={ind.intOne}
              item2={ind.intTwo}
              item3={ind.intTree}
              item4={ind.intFour}
            />
          );
        })}
      </div>

      <div className={styles.language}>
        <HeadingTwo text="Språk" />

        {LanguageData.map((ind) => {
          return (
            <Card
              key={ind}
              item1={ind.langOne}
              item2={ind.langTwo}
              item3={ind.langTree}
              item4={ind.langFour}
            />
          );
        })}
      </div>

      <div className={styles.sosial}>
        <HeadingTwo text="Sosiale Medier" />

        {SosialData.map((ind) => {
          return (
            <CardSome
              key={ind}
              iconLin={ind.iconLin}
              iconIns={ind.iconIns}
              iconFa={ind.iconFa}
            />
          );
        })}
      </div>

      {/* </div> */}
    </>
  );
};

export default Personalia;
