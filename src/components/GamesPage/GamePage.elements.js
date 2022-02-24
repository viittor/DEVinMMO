import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
`;
export const GamesContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  hr {
    margin-top: 15px;
    margin-bottom:10px;
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
