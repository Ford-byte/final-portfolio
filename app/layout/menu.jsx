"use client";
import { useState } from "react";
import Header from "@/public/icons/header";
import Logo from "@/public/icons/logo";
import Sun from "@/public/icons/sun";

export default function Menu() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="fixed w-full z-[100]">
        <Header className="fixed bg-white bg-opacity-[50%] z-[1]" />
        <section id="header" className="center fixed z-[100]">
          <div className="relative h-[100px] container">
            <div className="flex justify-between items-center h-full">
              <section id="logo">
                <Logo fill={`black`}/>
              </section>
              <section
                id="menu"
                className="flex gap-2 font-poppins text-[20px]">
                <span
                  className={`py-[10px] px-[22px] rounded-[10px] pointer ${
                    activeSection === "Home" ? "bg-red-500 text-white " : ""
                  }`}
                  onClick={() => handleSectionClick("Home")}>
                  Home
                </span>
                <span
                  className={`py-[10px] px-[22px] rounded-[10px] pointer ${
                    activeSection === "About" ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleSectionClick("About")}>
                  About
                </span>
                <span
                  className={`py-[10px] px-[22px] rounded-[10px] pointer ${
                    activeSection === "Skills" ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleSectionClick("Skills")}>
                  Skills
                </span>
                <span
                  className={`py-[10px] px-[22px] rounded-[10px] pointer ${
                    activeSection === "Projects" ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleSectionClick("Projects")}>
                  Projects
                </span>
                <span
                  className={`py-[10px] px-[22px] rounded-[10px] pointer ${
                    activeSection === "Contact" ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleSectionClick("Contact")}>
                  Contact
                </span>
              </section>
              <section id="mode">
                <div className="bg-[#F5F5F5] px-[5px] py-[5px] rounded-full ">
                  <Sun />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
