"use client";
import { useEffect, useRef } from "react";
import useLocalStore from "../store/localStore";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Install the Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Project() {
  const { setActive } = useLocalStore();
  const projectRef = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive("Projects");
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
      className="relative center min-h-[700px] lg:min-h-[600px] py-12"
      id="Projects"
      ref={projectRef}
    >
      <div className="pt-24 w-full flex flex-col items-center h-full lg:max-w-[70vw] gap-y-[24px]">
        <h2 className="text-[44px] text-primary underline">Projects</h2>
        <Swiper spaceBetween={24} slidesPerView={1} className="w-full">
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="h-[400px] lg:h-[500px]">
                <div className="w-full h-full bg-gray-200 lg:rounded-md">
                  <Image
                    src={`/html.png`}
                    width={1000}
                    height={1000}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
