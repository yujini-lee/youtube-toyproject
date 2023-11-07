import React, { useEffect, useState } from "react";
import ListItems from "./ListItems";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 3.6rem;
  margin-top:2rem;
  overflow: hidden;
`;
function List() {
  const [mostPopural, setMostPopural] = useState([]);

  // API 받아오기
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=AIzaSyBp-iegit53P84nio6AniO4CFoMSUDyvjw"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.items)
        setMostPopural(data.items);
      });
  }, []);
  return (
    <>
      <Ul>
        {mostPopural.map((item, index) => (
          <ListItems item={item} key={index} />
        ))}
      </Ul>
    </>
  );
}

export default List;
