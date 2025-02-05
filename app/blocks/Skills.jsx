"use client";
import { useEffect, useRef } from "react";
import useLocalStore from "../store/localStore";

import Html from "@/public/icons/html";
import Javascript from "@/public/icons/javascript";
import Mysql from "@/public/icons/mysql";
import NodeJs from "@/public/icons/node";
import Php from "@/public/icons/php";
import ReactIcon from "@/public/icons/reactIcon";
import Image from "next/image";

const techStack = [
  { name: "Mysql", logo: Mysql, image: "/mysql.png" },
  { name: "NodeJs", logo: NodeJs, image: "/node.png" },
  { name: "Html", logo: Html, image: "/html.png" },
];
const techStackTwo = [
  { name: "Javascript", logo: Javascript, image: "/js.png" },
  { name: "PHP", logo: Php, image: "/php.png" },
  { name: "React", logo: ReactIcon, image: "/react.png" },
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
          <div className="flex flex-col w-full">
            {techStack?.map((item) => (
              <div
                key={item.id || item.name}
                className="relative flex w-full h-[75px] justify-center items-center border-b-[4px] border-primary py-[12px] gap-x-[12px] 
               transition-all duration-500 transform hover:h-[200px] origin-top group"
              >
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-cente bg-gray-200 z-[0]">
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    alt="background"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-center gap-x-[12px] z-[1] w-[170px] h-full rounded-[100px] group-hover:text-white group-hover:bg-black/30">
                  <div className="mb-2">
                    {item.logo && (
                      <item.logo className="size-[40px]" />
                    )}
                  </div>
                  <div>{item.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full">
            {techStackTwo?.map((item) => (
              <div
                key={item.id || item.name}
                className="relative flex w-full h-[75px] justify-center items-center border-b-[4px] border-primary py-[12px] gap-x-[12px] 
               transition-all duration-500 transform hover:h-[200px] origin-top group"
              >
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-cente bg-gray-200 z-[0]">
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    alt="background"
                    className="w-full h-full object-cover opacity-100 bg-black/20"
                  />
                </div>

                <div className="flex items-center justify-center gap-x-[12px] z-[1] w-[170px] h-full rounded-[100px] group-hover:text-white group-hover:bg-black/30">
                  <div className="mb-2">
                    {item.logo && (
                      <item.logo className="size-[40px]" />
                    )}
                  </div>
                  <div>{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
