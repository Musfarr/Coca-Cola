import React from 'react'
import { Link } from 'react-router-dom'
import img from  "/Users/Musfar/Desktop/wk/ck/src/homeLogo.svg"

const Sidebar = () => {
  return (
    <div>

        
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-15 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

   <div class="h-full px-3 py-4 overflow-y-auto bg-black " style={{paddingTop:"1rem"}}>
         <Link to="/dashboard">  
            <div className='mb-16'> 
             <img src={img} />
             </div>
         </Link>
      <ul class="space-y-2 font-medium">



      {/* <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip right</button>
<div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on right
    <div class="tooltip-arrow" data-popper-arrow></div>
</div> */}

         
<li>
  <Link to="/dashboard">   
    <a class="relative flex items-center p-2 text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray-700 group tooltip-right " title="Home">
      <svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
      </svg>
    </a>
  </Link>
</li>



         <li>
         <Link to="/recorder">
         <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray-700 group tooltip tooltip-right" title="Call Recorder">
            <svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
  </svg>

            </a>
         </Link>
         </li>
      


         <li>
         <Link to="/missedcall">   
         <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray-700 group tooltip tooltip-right" title="Campaign">
            <svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
  </svg>
            </a>

         </Link>
         </li>


         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"style={{marginTop:"24rem"}} >
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
            </a>
         </li>

      </ul>
   </div>
</aside>

    </div>
  )
}


export default Sidebar
