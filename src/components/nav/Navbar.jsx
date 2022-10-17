import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <>
      <div className={style["header-container"]}>
        <Logo />
        <ul className={style["links-container"]}>
          <li className={style["header-links"]}>
            <Link to="./about">About</Link>
          </li>
          <li className={style["header-links"]}>
            <Link to="./projects">Projects</Link>
          </li>
          <li className={style["header-links"]}>
            <Link to="./cv">CV</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
