"use client";


export default function myTrade(){
  
  return(
        <div className="min-h-screen  bg-olive-50 space-y-20">

          

          <div className="flex justify-center gap-x-100 p-10">
            <div className="flex justify-center items-center gap-x-2">
              <img src="/mtlogolight2.png" className=" h-12 w-auto"/>
            <h6 className="font-mono tracking-widest text-stone-900 font-bold text-md   ">myTrade</h6>
            </div>
            <div className="flex justify-center items-center">
            <a href="/login" 
               className="font-serif text-stone-400  text-sm hover:text-stone-700" 
            > 
              Sign in
              
              </a> 

              </div>
             

          </div>


          <div className=" flex  pl-8 justify-center ">
            
            <div >

            <div>
            <h1 className="text-4xl  max-w-xl text-stone-900 font-bold font-mono py-5 ">A quit place to journal your trades.</h1> </div>

            <div>
            <p className="text-stone-400  max-w-lg py-5"> Log entries,track what worked, and talk through your thinking 
              with a thoughtful AI companion. No noise. No charts shouting at you.</p>
              </div>

              <div className="py-5">
            <a href="/signUp" className="p-3  hover:bg-stone-800/80   hover:shadow-stone-800   bg-stone-800 text-olive-50 
             text-sm font-semibold font-mono  rounded-lg ">Start Journaling</a> </div>
          
            </div>
           
          </div>

          <footer className="flex justify-center  text-xs font-semibold text-stone-400" >Built for traders who like to think before they trade.</footer>

        </div>


);

}