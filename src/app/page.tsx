import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            
            <div className=" text-center text-gray-900 font-bold text-xl mb-2">AteneoResidencia</div>
          </div>
          <div className="max-w-md mx-auto p-4">
          <label  className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com"/>
          </div>
          <div className="max-w-md mx-auto p-4">
          <label  className="block text-sm font-medium text-gray-700">Password</label>
          <input id="email" type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com"/>
          </div>

          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Joshua Sayon</p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
      

      
    </main>
  );
}
