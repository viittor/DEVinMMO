import styled from "styled-components";
import "../../App.css";
import Back from "../../assets/background-home.jpg";

export const HomeContainer = styled.div`
  height: 83vh;
  margin: 0em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    background: fixed url(${Back});
  }
`;

export const HomeContent = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 800px) {
    animation-name: animation;
    animation-duration: 7s;
    background-color: #fdfdfd77;
    padding: 0;
  }
  background-color: #efefef;
  padding: 10px;
`;

export const HomeText = styled.p`
  font-size: 3.2em;
  font-family: "Bungee", cursive;
  box-sizing: border-box;
  text-align: center;
  @media (min-width: 800px) {
    color: black;
    border-right: 2px solid rgba(25, 25, 25, 0.75);
    animation: blinkCursor 500ms steps(40) infinite normal,
      typing 5s steps(40) 1s normal both;
    white-space: nowrap;
    overflow: hidden;
  }
`;
