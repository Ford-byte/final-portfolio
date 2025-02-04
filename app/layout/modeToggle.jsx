"use client";

import useLocalStore from "../store/localStore";
import Sun from "@/public/icons/sun";
import Moon from "@/public/icons/moon";
export default function ModeToggle({ onClick }) {
  const { theme, setTheme, active, setActive } = useLocalStore();

  return (
    <>
      {theme === "light" ? (
        <Sun className="size-[42px] rotate-in-center" />
      ) : (
        <Moon className="size-[42px] rotate-in-center" />
      )}
    </>
  );
}
