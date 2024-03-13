import Image from "next/image";
import Login from "./components/Login";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">

      <h1 className="text-gray-600 text-center mb-8 font-semibold text-xl">Get Jokes</h1>
      
      <div className=" fixed left-0 top-0 flex w-full justify-center 
      border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 
      pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30
       dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border
        lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 flex-col mb-8">

      <Login/>

      </div>

      <div className="fixed left-0 top-0 flex w-full justify-center 
      border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 
      pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30
       dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border
        lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 flex-col">

         <p> Get started by filling  </p>
         <p>username as: kavya</p>  
         <p>password as: 1234 </p>  

        </div>
    </main>
  );
}
