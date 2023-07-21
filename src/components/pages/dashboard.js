import React from 'react'
import Sidebar from '../common/sidebar'

const Dashboard = () => {
  return (




      

    <div style={{backgroundColor:"#eaeaea"}}>

    <div className='text-left' style={{marginLeft:"6.5%"}}>
    <h1 style={{color:"#F40000" , fontSize:"xx-large" , fontWeight:"600" , paddingTop:"3rem"}}>RIGHT NOW</h1>
    </div>

      <Sidebar/>
    <div className='mr-2 ' >

    <div class="p-4 sm:ml-32" style={{marginLeft:"4rem"}}>
   <div class="p-4  rounded-lg " style={{marginTop : ""}}>
      <div class="grid grid-cols-1 gap-4 mb-4">
         <div ClassName="flex items-center justify-center h-24 rounded bg-gray-50 ">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </p>
         </div>
      </div>

      <div class="shadow-md flex items-center justify-center h-48 mb-4 rounded bg-gray-50 ">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            
         </p>
      </div>
      <div class=" grid grid-cols-1 gap-4 mb-4 " >
         <div class="flex shadow-md items-center justify-center rounded bg-gray-50 h-28 " style={{height:"500px"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
             xxxx
            </p>
         </div>

         <div class="flex shadow-md items-center justify-center rounded bg-gray-50 h-48 ">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              xxxx
            </p>
         </div>
      </div>
    

      <div class="grid grid-cols-3 gap-4 mb-4" style={{height:"500px"}}>
         <div class="flex shadow-md items-center justify-center rounded bg-gray-50 h-64 " style={{height:"100%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               
            </p>
         </div>
         <div class="flex shadow-md items-center justify-center rounded bg-gray-50 h-64 " style={{height:"100%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
           
            </p>
         </div>
         <div class="flex shadow-md items-center justify-center rounded bg-gray-50 h-64 " style={{height:"100%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">            
            </p>            
         </div>
      </div>

      <div class="grid grid-cols-2 gap-2 mb-4" style={{height:"500px"}}>
         <div class=" rounded shadow-md bg-gray-50 h-64 " style={{height:"100%" , width:"65%" }}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               
            </p>
         </div>
         <div class="rounded shadow-md bg-gray-50 h-64 " style={{height:"100%" , width: "133%" ,  marginLeft: "-33%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
           
            </p>
         </div>         
      </div>

      <div class="grid grid-cols-2 gap-2 mb-3 " style={{height:"600px" , width:"100%"}}>

         <div class="rounded shadow-md bg-gray-50 h-64 " style={{height:"100%" , width: "100%"  }}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
           
            </p>
         </div>

         <div class="rounded shadow-md bg-gray-50 h-64 " style={{height:"100%" , width: "100%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">           
            </p>
         </div>
         <div class="rounded shadow-md bg-gray-50 h-64 " style={{height:"100%" , width: "100%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">           
            </p>
         </div>
         <div class="rounded shadow-md bg-gray-50 h-64 " style={{height:"100%" , width: "100%"}}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">           
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center rounded shadow-md bg-gray-50 mb-4 h-48 ">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              xxxx
            </p>
      </div>
      <div class="flex items-center justify-center rounded shadow-md bg-gray-50 h-48  mb-4">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              xxxx
            </p>
      </div>


      <div class="flex items-center justify-center rounded shadow-md bg-gray-50 h-48 shadow-md" style={{height:"800vph" }}>
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              xxxx
            </p>
         </div>

   </div>
   
</div>


    </div>
    <p style={{textAlign:'end'}} > © 2023 The Coca-Cola Company. All rights reserved.</p>
    </div>
  )
}

export default Dashboard ;
