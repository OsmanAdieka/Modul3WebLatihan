import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
 
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/Contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;