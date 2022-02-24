import React from "react";
import GameItem from "../GameItem/GameItem";
import {
  Container,
  GameDiv,
  GameHeader,
  GamesContainer,
  GameSearch,
  GameSearchDiv,
} from "./GamePage.elements";
import Footer from "../Footer/Footer";

const GamesPage = () => {
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
                placeholder="Search Game..."
              ></GameSearch>
            </GameSearchDiv>
          </GameDiv>
          <hr/>
          <GameDiv>
            <GameItem></GameItem>
          </GameDiv>
        </GamesContainer>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default GamesPage;
