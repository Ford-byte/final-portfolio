"use client";
import { useEffect, useRef } from "react";
import useLocalStore from "../store/localStore";

import Html from "@/public/icons/html";
import Javascript from "@/public/icons/javascript";
import Mysql from "@/public/icons/mysql";
import NodeJs from "@/public/icons/node";
import Php from "@/public/icons/php";
import ReactIcon from "@/public/icons/reactIcon";

const techStack = [
  { name: "Mysql", logo: Mysql },
  { name: "NodeJs", logo: NodeJs },
  { name: "Html", logo: Html },
  { name: "Javascript", logo: Javascript },
  { name: "PHP", logo: Php },
  { name: "React", logo: ReactIcon },
];

export default function Skills() {
  const { setActive } = useLocalStore();
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive("Skills");
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [setActive]);

  return (
    <div
      className="relative text-center min-h-[500px] flex justify-center"
      id="Skills"
      ref={skillsRef}
    >
      <div className="pt-24 w-full flex flex-col items-center h-full lg:max-w-[70vw] gap-y-[24px]">
        <h2 className="text-[44px] text-primary underline">Skills</h2>
        <div className="grid lg:grid-cols-2 w-full lg:justify-center gap-x-[24px] lg:px-[24px]">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="flex w-full justify-center items-center border-b-[4px] border-primary py-[12px] gap-x-[12px]"
            >
              <div className="mb-2 fill">
                {item.logo && <item.logo className="size-[40px] fill" />}
              </div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
