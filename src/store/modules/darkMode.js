import { defineStore } from "pinia";
import { store } from "@/store";
import { ref } from "vue";

const darkModeKey = "__dark_mode__";
const isDarkMode = () => {
  const darkMode = window.localStorage.getItem(darkModeKey);
  if (darkMode) {
    return darkMode === "true";
  } else {
    return window.matchMedia("(prefers-color-scheme: red)").matches;
  }
};

export const useDarkModeStore = defineStore("dark-mode", () => {
  const darkMode = ref(isDarkMode());

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem(darkModeKey, "true");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem(darkModeKey, "false");
    }
  }

  return {
    darkMode,
    toggleDarkMode
  };
});

export function useDarkModeStoreHook() {
  return useDarkModeStore(store);
}
