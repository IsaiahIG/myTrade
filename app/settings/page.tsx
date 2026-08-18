"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";

const card = "rounded-2xl border p-6 transition-colors";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [weeklyReview, setWeeklyReview] = useState(true);
  const [companionContext, setCompanionContext] = useState(true);

  const dark = theme === "dark";
  const surface = dark ? "border-stone-100/10 bg-stone-800" : "border-stone-800/15 bg-white/35";
  const muted = dark ? "text-stone-400" : "text-stone-500";
  const input = dark
    ? "border-stone-100/15 bg-stone-900 text-stone-200"
    : "border-stone-800/15 bg-white/60 text-stone-800";

  return (
    <div className={`min-h-screen transition-colors ${dark ? "bg-stone-900 text-stone-200" : "bg-olive-50 text-stone-800"}`}>
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10 lg:py-20">
        <p className={`font-mono text-xs tracking-[0.18em] ${muted}`}>SETTINGS</p>
        <h2 className="mt-2 font-serif text-4xl leading-tight">Make it yours.</h2>
        <p className={`mt-3 max-w-xl font-mono text-sm leading-7 ${muted}`}>
          Keep your journal comfortable, focused, and useful to the way you trade.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <section className={`${card} ${surface} md:col-span-2`}>
            <p className={`font-mono text-xs tracking-[0.16em] ${muted}`}>APPEARANCE</p>
            <h3 className="mt-2 font-serif text-2xl">Choose your space.</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {(["light", "dark"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTheme(option)}
                  aria-pressed={theme === option}
                  className={`rounded-xl border p-4 text-left transition ${
                    theme === option
                      ? dark ? "border-stone-200 bg-stone-800" : "border-stone-800 bg-white"
                      : dark ? "border-stone-100/10 hover:border-stone-100/30" : "border-stone-800/10 hover:border-stone-800/30"
                  }`}
                >
                  <span className="flex items-center justify-between font-mono text-sm capitalize">
                    {option}
                    <span className={`h-3 w-3 rounded-full ${option === "dark" ? "bg-stone-700" : "border border-stone-300 bg-olive-50"}`} />
                  </span>
                  <span className={`mt-2 block font-mono text-xs ${muted}`}>
                    {option === "light" ? "Warm and quiet." : "Easy on the eyes."}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className={`${card} ${surface}`}>
            <p className={`font-mono text-xs tracking-[0.16em] ${muted}`}>PROFILE</p>
            <div className="mt-5 flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full font-serif text-lg ${dark ? "bg-stone-800" : "bg-stone-800 text-olive-50"}`}>JT</div>
              <div>
                <p className="font-mono text-sm">Journal Trader</p>
                <p className={`mt-1 font-mono text-xs ${muted}`}>john@example.com</p>
              </div>
            </div>
            <button className={`mt-6 font-mono text-xs underline underline-offset-4 ${muted}`}>Edit profile</button>
          </section>

          <section className={`${card} ${surface}`}>
            <p className={`font-mono text-xs tracking-[0.16em] ${muted}`}>TRADING</p>
            <label className="mt-5 block font-mono text-xs">Default currency</label>
            <select className={`mt-2 w-full rounded-lg border px-3 py-2 font-mono text-sm outline-none ${input}`} defaultValue="USD">
              <option>USD</option><option>EUR</option><option>GBP</option><option>CAD</option>
            </select>
            <label className="mt-5 block font-mono text-xs">Trading timezone</label>
            <select className={`mt-2 w-full rounded-lg border px-3 py-2 font-mono text-sm outline-none ${input}`} defaultValue="ET">
              <option value="ET">Eastern Time</option><option value="CT">Central Time</option><option value="PT">Pacific Time</option>
            </select>
          </section>

          <section className={`${card} ${surface} lg:col-span-2`}>
            <p className={`font-mono text-xs tracking-[0.16em] ${muted}`}>JOURNAL & COMPANION</p>
            <div className="mt-5 divide-y divide-stone-500/15">
              <SettingToggle label="Weekly review reminder" note="A quiet prompt to reflect every Sunday." enabled={weeklyReview} onChange={setWeeklyReview} />
              <SettingToggle label="Use journal context" note="Let the companion reference past entries." enabled={companionContext} onChange={setCompanionContext} />
            </div>
          </section>

          <section className={`${card} ${surface} md:col-span-2`}>
            <p className={`font-mono text-xs tracking-[0.16em] ${muted}`}>DATA & PRIVACY</p>
            <h3 className="mt-2 font-serif text-2xl">Your journal stays yours.</h3>
            <p className={`mt-3 max-w-xl font-mono text-xs leading-6 ${muted}`}>
              Export a copy of your entries or manage the data stored with your account.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className={`rounded-lg border px-4 py-2 font-mono text-xs ${dark ? "border-stone-100/20" : "border-stone-800/20"}`}>Export journal</button>
              <button className="rounded-lg px-4 py-2 font-mono text-xs text-red-700">Delete account</button>
            </div>
          </section>

          <section className={`${card} ${surface}`}>
            <p className={`font-mono text-xs tracking-[0.16em] ${muted}`}>ACCOUNT</p>
            <p className={`mt-4 font-mono text-xs leading-6 ${muted}`}>Signed in as john@example.com</p>
            <Link href="/login" className={`mt-6 flex w-full items-center justify-center rounded-lg px-4 py-2 font-mono text-sm ${dark ? "bg-stone-200 text-stone-900" : "bg-stone-800 text-olive-50"}`}>
              Sign out
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

function SettingToggle({ label, note, enabled, onChange }: { label: string; note: string; enabled: boolean; onChange: (enabled: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0">
      <div>
        <p className="font-mono text-sm">{label}</p>
        <p className="mt-1 font-mono text-xs opacity-55">{note}</p>
      </div>
      <button type="button" role="switch" aria-checked={enabled} onClick={() => onChange(!enabled)} className={`relative h-6 w-11 shrink-0 rounded-full transition ${enabled ? "bg-emerald-800" : "bg-stone-500/30"}`}>
        <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${enabled ? "left-6" : "left-1"}`} />
      </button>
    </div>
  );
}
