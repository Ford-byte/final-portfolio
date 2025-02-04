import { create } from "zustand";

const useLocalStore = create((set) => ({
  theme:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light",

  setTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),

  active: "Home",
  setActive: (section) =>
    set(() => ({
      active: section,
    })),
}));

export default useLocalStore;
