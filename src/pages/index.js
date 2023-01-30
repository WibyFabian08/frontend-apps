import React, { useRef } from "react";

import {
  Hero,
  Navbar,
  Feautre,
  About,
  Blog,
  Footer,
} from "../components";
import Testimoni from "../components/Testimoni";

const LandingPage = () => {
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const testimoniRef = useRef(null);
  const blogRef = useRef(null);

  return (
    <div className="flex flex-col">
      <Navbar
        heroRef={heroRef}
        featureRef={featureRef}
        aboutRef={aboutRef}
        testimoniRef={testimoniRef}
        blogRef={blogRef}
      ></Navbar>
      <Hero heroRef={heroRef}></Hero>
      <Feautre featureRef={featureRef}></Feautre>
      <About aboutRef={aboutRef}></About>
      <Testimoni testimoniRef={testimoniRef}></Testimoni>
      <Blog blogRef={blogRef}></Blog>
      <Footer
        heroRef={heroRef}
        featureRef={featureRef}
        aboutRef={aboutRef}
        testimoniRef={testimoniRef}
        blogRef={blogRef}
      ></Footer>
    </div>
  );
};

export default LandingPage;
