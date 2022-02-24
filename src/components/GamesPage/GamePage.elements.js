import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  
`;
export const GamesContainer = styled.div`
  width: 100%;
  max-width: 1080px;
`;

export const GameDiv = styled.div`
  width: 100;
  border: 2px black solid;
  display: flex;
  justify-content: center;
`;

export const GameHeader = styled.h1`
  display: flex;
  flex-wrap: wrap;
`;

export const GameSearch = styled.input`
text-align: center;
`;
