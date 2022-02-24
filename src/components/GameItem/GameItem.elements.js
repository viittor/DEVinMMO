import styled from "styled-components";

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
