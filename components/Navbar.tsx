"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const textColor = dark ? "text-stone-200 hover:text-stone-200/70" : "text-stone-800 hover:text-stone-800/70";

  return (
    <header className={`border-b-2 px-6 py-4 ${dark ? "border-stone-100/10" : "border-stone-800/10"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img src="/mtlogolight2.png" alt="myTrade logo" className="h-12 w-auto" />
          <span className={`font-mono text-lg ${dark ? "text-stone-200" : "text-stone-800"}`}>myTrade</span>
        </Link>
        <div className="flex items-center gap-4 overflow-x-auto sm:gap-10">
          <Link href="/home" className={`font-mono text-sm transition ${textColor}`}>Journal</Link>
          <Link href="/rules" className={`font-mono text-sm transition ${textColor}`}>Rules</Link>
          <Link href="/stats" className={`font-mono text-sm transition ${textColor}`}>Stats</Link>
          <Link href="/companion" className={`font-mono text-sm transition ${textColor}`}>Companion</Link>
          <Link href="/settings" className={`font-mono text-sm transition ${textColor}`}>Settings</Link>
        </div>
      </nav>
    </header>
  );
}
