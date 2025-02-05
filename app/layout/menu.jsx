"use client";
import { useEffect, useState } from "react";

import useLocalStore from "../store/localStore";
import Logo from "@/public/icons/logo";
import MenuBar from "@/public/icons/menuBar";
import ChevronUp from "@/public/icons/chevronUp";
import ModeToggle from "./modeToggle";

export default function Menu() {
  const { theme, setTheme, active, setActive } = useLocalStore();
  const [isOpen, setOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      document.documentElement.style.setProperty(
        "--background",
        theme === "dark" ? "#0a0a0a" : "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--foreground",
        theme === "dark" ? "#ededed" : "#171717"
      );
    }
  }, [theme, isHydrated]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="center">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#Home" aria-label="Go to homepage">
            <Logo className="w-[40px] h-[40px]" alt="Go to homepage" />
          </a>
          <section id="menu" className="hidden lg:flex gap-2  text-[20px]">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (section) => (
                <a
                  key={section}
                  href={"#" + section}
                  className={`py-[10px] px-[22px] rounded-[10px] pointer scroll-smooth ${
                    active === section ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => setActive(section)}
                >
                  {section}
                </a>
              )
            )}
          </section>
          <div className="flex gap-[12px]">
            <div className="flex lg:hidden items-center ">
              <MenuBar className="size-[30px]" onClick={toggleMenu} />
            </div>
            <span
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-[10px] py-[10px] rounded-full rotate-out-center"
            >
              <ModeToggle />
            </span>
          </div>
        </div>
        <div
          className={`lg:hidden justify-center fixed inset-0 z-[1001] w-full px-[16px] transition-all duration-500 ${
            isOpen ? "animate-in-top" : "animate-out-top hidden"
          }`}
        >
          <div className="w-full h-full flex flex-col items-center gap-y-[12px]">
            <div className="container background h-[50vh]">
              <section
                id="menu"
                className="gap-2  text-[20px] flex flex-col translate-y-[10%] h-full"
              >
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (section) => (
                    <a
                      href={`#${section}`}
                      key={section}
                      className={`py-[10px] px-[22px] pointer text-center ${
                        active === section ? "bg-red-500 " : ""
                      }`}
                      onClick={() => {
                        setActive(section);
                        setOpen(false);
                      }}
                    >
                      {section}
                    </a>
                  )
                )}
              </section>
              <div
                className="z-[10] w-full flex justify-center bg-gray-500/20 py-[6px]"
                onClick={toggleMenu}
              >
                <ChevronUp
                  className="size-[40px] pointer "
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
