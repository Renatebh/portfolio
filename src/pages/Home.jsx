import React from "react";
import style from "./Home.module.css";
import Image from "../components/image/Image";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import Some from "../components/some/Some";

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
              <Some />
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
