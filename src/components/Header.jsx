import React from "react";
import youtubelogo from "../img/logo.png";
import styles from "./css/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone, faMagnifyingGlass, faSquarePlus, faCube, faBell } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <div className={styles.header}>
        {/* 메뉴버튼 */}
        <div className={styles.logo}>
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <a href="/">
            <img src={youtubelogo} alt="유튜브로고" />
            <h1>Youtube</h1>
          </a>
        </div>
        <div className={styles.inputBox}>
          <div>
            <form>
              <input type="text" placeholder="검색" />
            </form>
            <button className={styles.searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <button className={styles.microphone}>
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
        </div>
        <div className={styles.headerIcon}>
          <button><FontAwesomeIcon icon={faSquarePlus} /></button>
          <button><FontAwesomeIcon icon={faCube} /></button>
          <button><FontAwesomeIcon icon={faBell} /></button>
        </div>
      </div>
    </>
  );
}

export default Header;
