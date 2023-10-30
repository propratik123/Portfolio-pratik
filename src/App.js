import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import HeroSection from "./components/MainBG";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { customTheme, darkTheme, lightTheme } from "./utils/Themes.js";

import Footer from "./components/Footer";

import styled from "styled-components";

import UserForm from "./components/UserForm";

import "bootstrap/dist/css/bootstrap.min.css";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [theme, setTheme] = useState("custom");

  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider
      theme={
        theme === "dark"
          ? darkTheme
          : theme === "light"
          ? lightTheme
          : customTheme
      }
    >
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>

          <Wrapper>
            <UserForm />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
