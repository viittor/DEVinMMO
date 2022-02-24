import React, { useEffect, useState } from "react";
import { getGameData } from "../../services/Api";

const GameItem = () => {
  const [gameItem, setGameItem] = useState([]);

  useEffect(() => {
    getGameData("games").then((data) => {
      setGameItem(data);
    });
  }, []);

  return (
    <>
      <div>
        {gameItem.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img
              src={item.thumbnail}
              loading="lazy"
              alt={`${item.title} game thumbnail`}
            />
            <p>
              {item.short_description.length > 130
                ? item.short_description.substring(0, 127) + "..."
                : item.short_description}
            </p>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default GameItem;
