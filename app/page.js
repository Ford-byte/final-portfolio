"use client";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./blocks/Banner.jsx"), { ssr: false });
const About = dynamic(() => import("./blocks/About.jsx"), { ssr: false });
const Skills = dynamic(() => import("./blocks/Skills.jsx"), { ssr: false });
const Projects = dynamic(() => import("./blocks/Projects.jsx"), { ssr: false });
const Contact = dynamic(() => import("./blocks/Contact.jsx"), { ssr: false });
const Footer = dynamic(() => import("./layout/footer.jsx"), { ssr: false });
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
