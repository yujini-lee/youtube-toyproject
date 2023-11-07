import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  a {
    text-decoration: none;
    color: #000;
  }
  .thum img {
    width: 100%;
  }
  .textBox {
    display: flex;
  }
  .textBox .title {
    font-size: 0.8rem;
  }
  .channelTit {
    font-size: 0.7rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

function ListItems({ item, index }) {
  const { snippet } = item;
  console.log(snippet);
  return (
    <Li key={index}>
      <StyledLink to="/">
        <div className="thum">
          <img src={snippet.thumbnails.standard.url} alt="" />
        </div>
        <div className="textBox">
          <img src="" alt="channelLogo" />
          <div>
            <p className="title">{snippet.title}</p>
            <span className="channelTit">{snippet.channelTitle}</span>
          </div>
        </div>
      </StyledLink>
    </Li>
  );
}

export default ListItems;





