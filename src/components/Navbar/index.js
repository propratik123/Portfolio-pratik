import React from "react";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import {
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from "./NavbarStyledComponent";

import { BsPersonFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import { BiLogoJava } from "react-icons/bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <FiPhoneCall size="1rem" /> <Span>+91 9096472291</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">
            <BsPersonFill size={20} /> About
          </NavLink>

          <NavLink href="#skills">
            <BiLogoJava size={20} /> Skills
          </NavLink>

          <NavLink href="#about">
            <TfiEmail size={20} /> ayushkumbhalkar24@gmail.com
          </NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
