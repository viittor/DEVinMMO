import React from "react";
import {
  Container,
  GameDiv,
  GameHeader,
  GamesContainer,
  GameSearch,
  GameSearchDiv,
} from "./GamePage.elements";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getGameData } from "../../services/Api";
import {
  ItemContainer,
  ItemDescription,
  ItemPage,
  ItemThumb,
  ItemTitle,
} from "./GamePage.elements";
import {useNavigate} from "react-router"

const GamesPage = () => {
  const navigate = useNavigate();
  const [gameItem, setGameItem] = useState([]);
  const [gameFilter, setGameFilter] = useState([]);

  useEffect(() => {
    getGameData("games").then((data) => {
      setGameItem(data);
    });
  }, []);

  return (
    <>
      <Container>
        <GamesContainer>
          <GameDiv>
            <GameHeader>Game List</GameHeader>
          </GameDiv>
          <GameDiv>
            <GameSearchDiv>
              <GameSearch
                type={"text"}
                value={gameFilter}
                onChange={(e) => setGameFilter(e.target.value)}
                placeholder={"Search Game..."}
              />
            </GameSearchDiv>
          </GameDiv>
          <hr />
          <GameDiv>
            <ItemPage>
              {gameItem
                // eslint-disable-next-line array-callback-return
                .filter((game) => { 
                  // eslint-disable-next-line eqeqeq
                  if (gameFilter == "") {
                    return game;
                  } else if (
                    game.title.toLowerCase().includes(gameFilter.toLowerCase())
                  ) {
                    return game;
                  }
                })
                .map((game, index) => (
                  <ItemContainer key={index} onClick={() => navigate("/details/" + game.id) }>
                    <ItemTitle>{game.title}</ItemTitle>
                    <ItemThumb
                      src={game.thumbnail}
                      alt={"game thumbnail"}
                    />
                    <ItemDescription>
                      {game.short_description.length > 130
                        ? game.short_description.substring(0, 90) + "..."
                        : game.short_description}
                    </ItemDescription>
                  </ItemContainer>
                ))}
            </ItemPage>
          </GameDiv>
        </GamesContainer>
      </Container>
      <Footer />
    </>
  );
};

export default GamesPage;
