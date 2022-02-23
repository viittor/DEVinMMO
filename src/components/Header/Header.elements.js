import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #434343;
  height: 12vh;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;

  top: 0;
`;

export const NavLogo = styled(Link)`
margin: 10px;
`;

export const Logo = styled.img`
max-height: 9vh;
`;

export const NavMenu = styled.ul`
align-items: center;
display: flex;
flex-wrap: wrap;
margin-right: 15px;
`;

export const NavItem = styled(Link)`
color: white;
text-decoration: none;
padding: 5px;
margin: 5px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

&:hover{
    border-bottom: 2px solid #ff0099;
}

`;
