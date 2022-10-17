import React from "react";
import style from "./Home.module.css";
import Image from "../components/image/Image";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className={style["home-container"]}>
        <nav className={style.nav}>
          <Navbar />
        </nav>
        <main className={style["main-container"]}>
          <div className={style["header-container"]}>
            <h1 className={style["header-header"]}>
              Hi!, I Am <br /> Renate Hem
            </h1>
            <p className={style["header-txt"]}>
              Frontend-devloper student at Gokstad Akademiet
            </p>
            <div className={style["some-container"]}>
              <span className={style["some-icons"]}>
                <FaFacebookF size={30} />
              </span>
              <span className={style["some-icons"]}>
                <FaInstagram size={30} />
              </span>
              <span className={style["some-icons"]}>
                <FaLinkedinIn size={30} />
              </span>
            </div>
          </div>
          <div className={style["image-container"]}>
            <Image />
          </div>
        </main>
        <footer className={style.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
