"use client";
import { useEffect, useRef } from "react";
import useLocalStore from "../store/localStore";
import Image from "next/image";
export default function Contact() {
  const { setActive } = useLocalStore();
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive("About");
        }
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [setActive]);
  return (
    <>
      <div className="center slide-in-top" id="About" ref={contactRef}>
        <div className="flex justify-center container  min-h-[700px] text">
          <div className=" w-full flex flex-col items-center h-full lg:max-w-[70vw] gap-y-[24px]">
            <h2 className="text-[44px] text-primary underline">About</h2>
            {/* About Section */}
            <div className="grid lg:grid-cols-2 gap-y-[24px] w-full h-full">
              <Image
                src={`/profile.png`}
                alt="Profile Picture"
                width={1280}
                height={500}
                className="h-[400px] lg:min-h-[500px] w-full object-cover "
              />
              <div className="flex flex-col gap-y-[24px] lg:max-w-[500px] px-[24px]">
                <h2 className="text-[32px]">Hello</h2>
                <p className="text-justify">
                  Hardworking software engineering student from Zenica in my
                  third and final year. I'm also a former Pharmacy technician
                  and a future full-stack developer. I’ve found my passion in
                  web development. I love spending time coding and encountering
                  new challenges. I’m highly adaptable to new challenges and
                  projects. I'm a Junior Scholar at the Bosnia and Herzegovina
                  Futures foundation, and that is the best thing that happened
                  to me.
                </p>
                <div className="flex justify-end">
                  <a
                    href="/profile.png"
                    download
                    className="px-[15px] py-[16px] bg-primary font-[700] w-fit rounded-lg pointer text-white"
                  >
                    DOWNLOAD CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
