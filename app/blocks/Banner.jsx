"use client";
import { useEffect, useRef } from "react";
import useLocalStore from "../store/localStore";
import Email from "@/public/icons/email";
import Github from "@/public/icons/github";
import LinkedIn from "@/public/icons/linkedin";
import Logo from "@/public/icons/logo";

export default function Banner() {
  const { setActive } = useLocalStore();
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive("Home");
        }
      },
      { threshold: 0.5 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [setActive]);

  return (
    <div
      className="relative background h-full slide-in-top"
      id="Home"
      ref={projectRef}
    >
      <div className="center items-center min-h-[500px] lg:min-h-[700px] font-poppins">
        <div className="container px-[16px]">
          <div className="flex justify-center w-full lg:justify-between">
            <div className="flex flex-col gap-4 gap-y-[24px] justify-center">
              <section
                id="intro"
                className="text-[clamp(22px,7vw,52px)] lg:text-[clamp(52px,2vw,72px)] flex flex-col gap-2 tracking-[5px] lg:tracking-[10px] leading-[clamp(52px,1vw,72px)] lg:leading-[clamp(72px,5vw,95px)]"
              >
                <span>
                  HI, I'm <span className="text-primary">Clifford</span>,
                </span>
                <span>Web Developer. |</span>
              </section>
              <span id="button">
                <button className="px-[24px] py-[14px] lg:px-[54px] lg:py-[14px] text-[16px] lg:text-[24px] pointer bg-primary text-white w-fit h-fit rounded-lg">
                  Contact
                </button>
              </span>
              <div className="flex gap-[24px]">
                <span>
                  <LinkedIn />
                </span>
                <span>
                  <Github />
                </span>
                <span>
                  <Email />
                </span>
              </div>
            </div>
            <div className="lg:flex hidden">
              <Logo className="size-[350px] text " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
