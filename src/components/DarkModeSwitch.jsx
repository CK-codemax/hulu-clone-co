"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <SunIcon
            className="h-5 sm:h-7 cursor-pointer text-orange-400 hover:text-[#1ce783]"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="h-5 sm:h-7 cursor-pointer text-black hover:text-[#1ce783]"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}