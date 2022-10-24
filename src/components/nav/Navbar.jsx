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
          <Link to="./about" className={style["link-nav"]}>
            About
          </Link>

          <Link to="./projects" className={style["link-nav"]}>
            Projects
          </Link>

          <Link to="./cv" className={style["link-nav"]}>
            CV
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
