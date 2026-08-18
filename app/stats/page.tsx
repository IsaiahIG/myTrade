import Navbar from "@/components/Navbar";

const summary = [
  { label: "NET P&L", value: "+$2,840", note: "Across 24 trades", positive: true },
  { label: "WIN RATE", value: "62.5%", note: "15 wins · 9 losses" },
  { label: "AVG. WIN", value: "+$286", note: "2.1× average loss", positive: true },
  { label: "PROFIT FACTOR", value: "1.84", note: "Last 30 days" },
];

const setups = [
  { name: "Opening range", trades: 9, winRate: "78%", result: "+$1,620" },
  { name: "Pullback", trades: 8, winRate: "63%", result: "+$940" },
  { name: "Reversal", trades: 7, winRate: "43%", result: "+$280" },
];

const curve = [42, 39, 45, 44, 51, 49, 58, 55, 63, 67, 64, 72, 78, 75, 84, 88, 86, 94];

export default function Stats() {
  const points = curve
    .map((value, index) => `${(index / (curve.length - 1)) * 100},${100 - value}`)
    .join(" ");

  return (
    <div className="min-h-screen bg-olive-50 text-stone-800">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10 lg:py-20">
        <section>
          <p className="font-mono text-xs tracking-[0.18em] text-stone-500">
            YOUR STATS
          </p>
          <h2 className="mt-2 font-serif text-4xl leading-tight text-stone-800">
            A clearer view.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-sm leading-7 text-stone-600">
            A simple look at your trading patterns. Use the numbers to reflect,
            not to chase.
          </p>
        </section>

        <section className="mt-12 grid border-y border-stone-800/15 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((item, index) => (
            <div
              key={item.label}
              className={`py-6 sm:px-6 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index > 1 ? "border-t lg:border-t-0" : ""} ${
                index !== summary.length - 1 ? "border-stone-800/15 lg:border-r" : ""
              }`}
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-stone-500">
                {item.label}
              </p>
              <p
                className={`mt-3 font-serif text-3xl ${
                  item.positive ? "text-emerald-800" : "text-stone-800"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-2 font-mono text-xs text-stone-500">{item.note}</p>
            </div>
          ))}
        </section>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.55fr_1fr]">
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-stone-500">
                  PERFORMANCE
                </p>
                <h3 className="mt-2 font-serif text-2xl">Equity curve</h3>
              </div>
              <p className="font-mono text-xs text-stone-500">Last 30 days</p>
            </div>

            <div className="mt-6 border-y border-stone-800/15 py-8">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-52 w-full overflow-visible"
                role="img"
                aria-label="Equity curve trending upward over the last 30 days"
              >
                <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" className="text-stone-800/10" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" className="text-stone-800/10" strokeWidth="0.5" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" className="text-stone-800/10" strokeWidth="0.5" />
                <polyline
                  points={points}
                  fill="none"
                  stroke="currentColor"
                  className="text-stone-700"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="mt-4 flex justify-between font-mono text-[10px] text-stone-400">
                <span>JUL 19</span>
                <span>AUG 02</span>
                <span>AUG 17</span>
              </div>
            </div>
          </section>

          <section>
            <p className="font-mono text-xs tracking-[0.16em] text-stone-500">
              BY SETUP
            </p>
            <h3 className="mt-2 font-serif text-2xl">What is working.</h3>

            <div className="mt-6 border-t border-stone-800/15">
              {setups.map((setup) => (
                <div
                  key={setup.name}
                  className="grid grid-cols-[1fr_auto] gap-4 border-b border-stone-800/15 py-5"
                >
                  <div>
                    <p className="font-mono text-sm text-stone-800">{setup.name}</p>
                    <p className="mt-1 font-mono text-xs text-stone-500">
                      {setup.trades} trades · {setup.winRate} win rate
                    </p>
                  </div>
                  <p className="font-mono text-sm text-emerald-800">{setup.result}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <p className="mt-12 font-mono text-xs leading-6 text-stone-400">
          Based on journaled trades. More entries make these patterns more useful.
        </p>
      </main>
    </div>
  );
}
