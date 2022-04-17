import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu, OuterLink } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaHome,
  FaFeatherAlt,
  FaRegBookmark,
  FaInfoCircle,
  FaSignOutAlt,
  FaGithub,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const iconStyle = {
    marginRight: "0.5rem",
    fontSize: "1.5rem",
  };
  const hamburgerStyle = {
    marginRight: "1rem",
    fontSize: "1.5rem",
    fontWeight: "300",
    color: "rgb(200, 6, 6)", 
    fontSize: "2rem", 
  };
  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu
          style={hamburgerStyle}
        />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/home">
          <FaHome style={iconStyle} /> Home
        </MenuLink>
        <MenuLink to="/ownrecipes">
          <FaFeatherAlt style={iconStyle} /> MyRecipes
        </MenuLink>

        <MenuLink to="/saved">
          <FaRegBookmark style={iconStyle} /> Bookmark
        </MenuLink>
        <MenuLink to="/about">
          <FaInfoCircle style={iconStyle} /> About
        </MenuLink>
        <OuterLink
          href="https://github.com/bekirugurr"
          target="_blank"
        >
          <FaGithub style={iconStyle} /> Github
        </OuterLink>
        <MenuLink to="/" >
          <FaSignOutAlt style={iconStyle} /> Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
