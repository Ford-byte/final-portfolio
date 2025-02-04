"use client";

import Menu from "./menu";

// import dynamic from "next/dynamic";
// const Menu = dynamic(() => import("./menu"), { ssr: false });

export default function Header() {
  return (
    <header>
      <section
        id="menu-mode"
        className="fixed w-full py-4 z-[1000] background top-0 left-0 px-[16px]"
      >
        <Menu />
      </section>
    </header>
  );
}
