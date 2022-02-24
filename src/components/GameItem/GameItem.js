import React, { useEffect, useState } from "react";
import { getGameData } from "../../services/Api";
import { ItemContainer, ItemDescription, ItemPage, ItemThumb, ItemTitle } from "./GameItem.elements";

const GameItem = () => {
  const [gameItem, setGameItem] = useState([]);

  useEffect(() => {
    getGameData("games").then((data) => {
      setGameItem(data);
    });
  }, []);

  return (
    <>
      <ItemPage>
        {gameItem.map((item, index) => (
          <ItemContainer key={index}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemThumb
              src={item.thumbnail}
              loading="lazy"
              alt={`${item.title} game thumbnail`}
            />
            <ItemDescription>
              {item.short_description.length > 130
                ? item.short_description.substring(0, 127) + "..."
                : item.short_description}
            </ItemDescription>
          </ItemContainer>
        ))}
      </ItemPage>
      
    </>
  );
};

export default GameItem;
