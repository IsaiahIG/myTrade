import Navbar from "@/components/Navbar";

export default function Error() {
  return (
    <div className="min-h-screen bg-olive-50">

        <div className="flex  border-2 border-stone-800/10 font-mono  cursor-pointer p-2 "> 
            <a href="/home" className = "flex text-xl font-mono text-stone-800 cursor-pointer p-4 transition-all hover:-translate-y-1 hover:bg-shadow-100"> Back </a> 
        </div>

      <main className="flex items-center justify-center  px-60 py-15">

        <section className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-stone-800">
           404    
          </h2>
          <h2 className="font-serif text-4xl leading-tight text-stone-800">
          Page not Found
          </h2>


          <div className="pt-4  space-y-6  flex-col  ">

            <div className= "  flex justify-between items-center ">


                

                <div className="h-px w-full pt- bg-stone-800 "/>
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}