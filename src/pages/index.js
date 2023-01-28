import React, { useRef } from "react";

import { Hero, Navbar, Feautre, About, Blog, Footer, Demo } from "../components";
import Testimoni from "../components/Testimoni";

const LandingPage = () => {
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="flex flex-col">
      <Navbar
        heroRef={heroRef}
        featureRef={featureRef}
        aboutRef={aboutRef}
      ></Navbar>
      <Hero heroRef={heroRef}></Hero>
      <Feautre></Feautre>
      <About></About>
      <Testimoni></Testimoni>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
