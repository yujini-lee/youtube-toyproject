import React from "react";
import logo from "../img/logo.png";
import styles from './css/Header.module.css'

function Header() {
  return (
    <>
      <div className={styles.header}>
        {/* 메뉴버튼 */}
        <div className="logo">
          <button></button>
          <h1>
            <img src={logo} alt="유튜브로고" />
            Youtube
          </h1>
        </div>
        <div className="inputBox">
          <form>
            <input type="text" placeholder="serch..." />
            <button></button>
          </form>
        </div>
        <div className="headerIcon">
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </>
  );
}

export default Header;
