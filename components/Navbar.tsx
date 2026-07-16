export default function Navbar() {
  return (
    <header className="border-b-2 border-stone-800/10 px-6 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/mtlogolight2.png"
            alt="myTrade logo"
            className="h-12 w-auto"
          />

          <h1 className="font-mono text-lg text-stone-800">
            myTrade
          </h1>
        </a>

        <div className="flex items-center gap-10">
          <a
            href="/home"
            className="font-mono text-sm text-stone-800 transition hover:text-stone-800/70"
          >
            Journal
          </a>

          <a
            href="/rules"
            className="font-mono text-sm text-stone-800 transition hover:text-stone-800/70"
          >
            Rules
          </a>

            <a
            href="/stats"
            className="font-mono text-sm text-stone-800 transition hover:text-stone-800/70"
          >
            Stats
          </a>
          

          <a
            href="/companion"
            className="font-mono text-sm text-stone-800 transition hover:text-stone-800/70"
          >
            Companion
          </a>

          <a
            href="/settings"
            className="font-mono text-sm text-stone-800 transition hover:text-stone-800/70"
          >
            Settings
          </a>
        </div>
      </nav>
    </header>
  );
}