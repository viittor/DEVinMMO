import React from "react";
import { Nav, NavLogo, Logo, NavMenu, NavItem } from "./Header.elements";
import Logotipo from "../../assets/logo-white.png"

const Header = () => {

    return (
        <Nav>
            <NavLogo to={"/"}>
                <Logo src={Logotipo}></Logo>
            </NavLogo>
            <NavMenu>
                <NavItem to={"/"}>HOME</NavItem>
                <NavItem to={"/Games"}>GAMES</NavItem>
                <NavItem to={"/News"}>NEWS</NavItem>
            </NavMenu>
        </Nav>
    )
};

export default Header;