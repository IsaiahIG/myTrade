import Navbar from "@/components/Navbar";

export default function Journal() {
  return (
    <div className="min-h-screen bg-olive-50">
      <Navbar />

      <main className="flex items-center justify-center  px-60 py-15">

        <section className="max-w-3xl">
            <h6 className="text-stone-500 font-mono text-sm">YOUR JOURNAL</h6>
          <h2 className="font-serif text-4xl leading-tight text-stone-800">
            Trade entries.
          </h2>

          <p className=" max-w-xl font-mono text-sm leading-7 text-stone-700">
            A quiet record of what you did, why, and what you learned. Nothing more.
          </p>

          <div className="pt-4  space-y-6  flex-col  ">

            <div className= "  flex justify-between items-center ">

                <h1 className="text-stone-800  font-mono"> Entries</h1>

                <button className="p-2 text-sm rounded-md bg-stone-800 hover:bg-stone-800/80
                 cursor-pointer "> New entry + </button>

                </div>

                <div className="h-px w-full pt- bg-stone-800 "/>
            
            
          </div>
        </section>
      </main>
    </div>
  );
}