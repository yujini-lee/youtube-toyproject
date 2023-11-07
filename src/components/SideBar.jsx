import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faVideo, faMoneyBillWheat, faUser} from "@fortawesome/free-solid-svg-icons";

const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 2rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 3.6rem;
  
  li {
    font-size: 4rem;
    text-align: center;
  }
  svg{
    margin-bottom: .5rem;
  }
`;
function SideBar() {
  return (
    <>
      <SideNav>
        <ul>
          <li>
            <button>
              <FontAwesomeIcon icon={faHouse} /> <br/>
              홈
            </button>
          </li>
          <li>
            <button>
            <FontAwesomeIcon icon={faVideo} /><br/>
            Short</button>
          </li>
          <li>
            <button>
            <FontAwesomeIcon icon={faMoneyBillWheat} /><br/>
            구독</button>
          </li>
          <li>
            <button>
            <FontAwesomeIcon icon={faUser} /><br/>
            나</button>
          </li>
        </ul>
      </SideNav>
    </>
  );
}

export default SideBar;
