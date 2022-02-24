import styled from "styled-components";
import "../../App.css";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  min-height: 83vh;
`;
export const GamesContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  hr {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

export const GameDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const GameHeader = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 3em;
  font-family: "Rajdhani", sans-serif;
  font-weight: 800;
  padding: 8px;
`;

export const GameSearchDiv = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GameSearch = styled.input`
  text-align: center;
  height: 30px;
  min-width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  width: 400px;
  border: 0.2px solid rgba(25, 25, 25, 255);
  border-radius: 10px;
`;

export const ItemPage = styled.div`
  display: flex;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-family: "Dosis", sans-serif;
`;

export const ItemContainer = styled.div`
  max-width: 310px;
  height: 250px;
  margin: 15px;
  padding: 7px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  background-color: #f9f6f6;
  :hover {
    animation-name: animation-item;
    animation-duration: 1s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: white;
  }
`;

export const ItemTitle = styled.h2`
  width: 100%;
  text-align: center;
  padding: 2px;
`;

export const ItemThumb = styled.img`
  max-width: 280px;
  width: 100%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ItemDescription = styled.div`
  padding: 5px 3px 5px 3px;
  overflow: hidden;
`;
