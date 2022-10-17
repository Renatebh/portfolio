import React from "react";
import { Link } from "react-router-dom";
import style from "../links/Links.module.css";

const Links = () => {
  return (
    <div>
      <ul className={style["links-list"]}>
        <li className={style["link-item"]}>
          <Link to="/">Hjem</Link>
        </li>
        <li className={style["link-item"]}>
          <Link to="/projects">Prosjekter</Link>
        </li>
        <li className={style["link-item"]}>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
