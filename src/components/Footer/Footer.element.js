import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #434343;
  flex-shrink: 0;

  p {
    color: white;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    text-align: center;
    font-size: 0.9em;
    margin: 5px;
  }
`;

export const Portifolio = styled.a`
  color: #ff0099;
  text-decoration: none;

  &:hover {
    background-color: #fdfdfd;
    color: black;
    padding: 2px;
    border-radius: 5px;
  }
`;
