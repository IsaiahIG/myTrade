"use client";


export default function Signup(){

    return(
        <div className="min-h-screen flex bg-olive-50 justify-center items-center  ">

            <div className="w-full max-w-lg h-full  rounded-md p-5  ">

            <div className=" flex-col space-y-9  text-stone-500"> 
                <div>
                <h1 className="text-lg font-mono font-semibold text-stone-900">myTrade</h1></div>

                <div><h1 className="py-2 text-2xl font-bold font-mono tracking-widest
                 text-stone-800 ">Create your journal.</h1>
                 <h1 className="text-stone-500 font-mono text-sm">It only takes a moment. </h1></div>

                 

                 <div className="space-y-7">
                    
                    <div className="space-y-3">
                        
                        <h1 className="text-sm font-mono tracking-widest">EMAIL</h1>
                        <input type="email" placeholder="john@example.com" className="w-full rounded-xl border
                         border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30">
                        
                        </input>
                        
                        </div>
                    
                    <div className="space-y-3">

                        <h1 className="text-sm font-mono tracking-widest">PASSWORD</h1>
                        <input type="password" placeholder="password1234" className="w-full rounded-xl border
                         border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30">

                         </input>

                        </div>

                        <div className="space-y-3">

                        <h1 className="text-sm font-mono tracking-widest">CONFIRM PASSWORD</h1>
                        <input type="password" placeholder="password1234" className="w-full rounded-xl border
                         border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30">

                         </input>

                        </div>


                        

                 </div>

                 
                        <a href="/home" className="bg-stone-800 hover:bg-stone-800/80 cursor-pointer  flex items-center justify-center w-full  text-olive-50 font-mono  rounded-md p-2"> Sign up </a>

                                        <div className="space-x-3">
                                          <a href="/login" className="flex items-center 
                                           justify-center text-xs hover:text-stone-800 font-semibold font-mono"> Already  have an account? <span className="underline pl-2"> Sign in</span></a>

                                        </div>
                </div>

                </div>

        </div>


    );

}