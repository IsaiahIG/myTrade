import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-olive-50 text-stone-800">
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100vh-82px)] w-full max-w-5xl items-center px-6 py-16 sm:px-10">
        <section className="w-full max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-stone-500">404 · NOT FOUND</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-stone-800 sm:text-6xl">
            This page is not in your journal.
          </h1>
          <p className="mt-5 max-w-lg font-mono text-sm leading-7 text-stone-500">
            The page may have moved, or the address may be incomplete. Your entries are still right where you left them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5 border-t border-stone-800/15 pt-7">
            <Link href="/home" className="rounded-lg bg-stone-800 px-5 py-3 font-mono text-sm text-olive-50 transition hover:bg-stone-800/80">
              Return to journal
            </Link>
            <Link href="/" className="font-mono text-sm text-stone-500 underline underline-offset-4 transition hover:text-stone-800">
              Go to homepage
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
