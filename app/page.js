"use client";

import Banner from "./blocks/Banner";
import Skills from "./blocks/Skills";
import Contact from "./blocks/Contact";
import Footer from "./layout/footer";
import About from "./blocks/About";
import Projects from "./blocks/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
