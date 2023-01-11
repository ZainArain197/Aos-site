import React from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Branding from "./components/Branding/Branding";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skill from "./components/Skills/Skill";
import WrapperOne from "./components/Wrapper/WrapperOne";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Header />
        <Home />
        <Branding />
        <About />
        <Services />
        <Skill />
        <WrapperOne />
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
