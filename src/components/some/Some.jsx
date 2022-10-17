import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import style from "./Some.module.css";
import { Link } from "react-router-dom";

const Some = () => {
  return (
    <>
      <span className={style["some-icons"]}>
        <a href="https://www.facebook.com/renate.hem">
          <FaFacebook size={30} />
        </a>
      </span>
      <span className={style["some-icons"]}>
        <a href="https://www.instagram.com/renatehem/">
          {" "}
          <FaInstagram size={30} />
        </a>
      </span>
      <span className={style["some-icons"]}>
        <a href="https://www.linkedin.com/in/renate-hem/">
          <FaLinkedinIn size={30} />
        </a>
      </span>
      <span className={style["some-icons"]}>
        <a href="https://github.com/Renatebh">
          <FaGithub size={30} />
        </a>
      </span>
    </>
  );
};

export default Some;
