import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <>
      <div className={style["header-container"]}>
        <Logo />
        <div className={style["links-container"]}>
          <button className={style["btn-hover color-1"]}>
            <Link to="./about">About</Link>
          </button>
          <Link to="./projects" className={style["btn-hover color-1"]}>
            Projects
          </Link>

          <Link to="./cv" className={style["btn-hover color-1"]}>
            CV
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
