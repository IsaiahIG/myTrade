import Navbar from "@/components/Navbar";

export default function Journal() {
  return (
    <div className="min-h-screen bg-olive-50">
      <Navbar />

      <main className="flex items-center justify-center  px-60 py-15">

        <section className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-stone-800">
            Rules
          </h2>

          <p className=" max-w-xl font-mono text-sm leading-7 text-stone-700">
            A page to be reminded of your rules. 
          </p>

          <div className="pt-4  space-y-6  flex-col  ">

            <div className= "  flex justify-between items-center ">

                <h1 className="text-stone-800  font-mono"> Rules</h1>

                <button className="p-2 text-sm rounded-md bg-stone-800 hover:bg-stone-800/80
                 cursor-pointer "> New Rule + </button>

                </div>

                <div className="h-px w-full pt- bg-stone-800 "/>
            
            
          </div>
        </section>
      </main>
    </div>
  );
}