import { useEffect, useState } from "react";
import useLocalStore from "../store/localStore";
import Sun from "@/public/icons/sun";
import Moon from "@/public/icons/moon";

export default function ModeToggle({ onClick }) {
  const { theme, setTheme, active, setActive } = useLocalStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensures the component only renders on the client side
  }, []);

  if (!hydrated) {
    return null; // Don't render anything during SSR
  }

  return (
    <>
      {theme === "light" ? (
        <Sun className="size-[24px] rotate-in-center" />
      ) : (
        <Moon className="size-[24px] rotate-in-center" />
      )}
    </>
  );
}
