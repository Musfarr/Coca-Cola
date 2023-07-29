import React, { useEffect,useState } from 'react';
import { Tabs } from 'flowbite';






const Missedcall = () => {

//     const [tabs, setTabs] = useState(null)


//     useEffect(() => {
  
//       const tabElements = [
//         {
//             id: 'profile',
//             triggerEl: document.querySelector('#profile-tab-example'),
//             targetEl: document.querySelector('#profile-example')
//         },
//         {
//             id: 'dashboard',
//             triggerEl: document.querySelector('#dashboard-tab-example'),
//             targetEl: document.querySelector('#dashboard-example')
//         },
//         {
//             id: 'settings',
//             triggerEl: document.querySelector('#settings-tab-example'),
//             targetEl: document.querySelector('#settings-example')
//         },
//         {
//             id: 'contacts',
//             triggerEl: document.querySelector('#contacts-tab-example'),
//             targetEl: document.querySelector('#contacts-example')
//         }
//     ];
//     // options with default values
//   const options = {
//     defaultTabId: 'settings',
//     activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
//     inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
//     onShow: () => {
//         console.log('tab is shown');
//     }
//   };
  
//   const tabsInstance = new Tabs(tabElements, options); // Initialize tabs
//   setTabs(tabsInstance); // Store the tabs instance in the state
  
//   tabsInstance.show('dashboard');
  
//     }, []);
  
  
  
//     useEffect(() => {
//       // Check if tabs has been initialized before accessing its methods
//       if (tabs) {
//         // get the tab object based on ID
//         tabs.getTab('contacts');
  
//         // get the current active tab object
//         tabs.getActiveTab();
//       }
//     }, [tabs]);





  return (
<div style={{height:"100vh" , marginLeft:"15vh" , marginTop:"30px"}}> 

<div style={{textAlign:'initial' ,fontFamily:'sans-serif'}} >
    <h3 style={{color:"red" ,fontWeight:"400" , fontSize:"40px" }}>MISSED CALL ENTRIES </h3>
    <p><b>Use this page to view the total and unique missed call.</b></p>
</div>


<div style={{marginRight:"50%",paddingTop:"10vh"}}>
<div className='flex mb-2 ' id="tabExample" role="tablist">
<div className=''> <button  id="profile-tab-example" type="button" role="tab" aria-controls="profile-example" aria-selected="false"> <h1 className=" underline" style={{color:"red" }}   >  TOTAL ENTRIES </h1> </button> </div>
<div className='pl-8 '> <button id="dashboard-tab-example" type="button" role="tab" aria-controls="dashboard-example" aria-selected="false"> <h1 className= " underline"style={{color:""}}    >  TOTAL ENTRIES </h1> </button> </div>
</div>
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-3 h-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
    </div>
</form>
</div>


<div class="relative overflow-x-auto shadow-md" style={{marginTop:"5vh"}}>


<div id="tabContentExample">
    <div class=" p-4 rounded-lg bg-gray-50 " id="profile-example" role="tabpanel" aria-labelledby="profile-tab-example">
    <div class="relative overflow-x-auto shadow-md" style={{marginTop:"5vh"}}>
        <table class="w-full text-sm text-left text-black dark:text-black">
            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <br></br>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                </tr>
                <br/>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
                <br/>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
                <br></br>
                <tr class="bg-white  shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>



{/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div class="hidden p-4 rounded-lg " id="dashboard-example" role="tabpanel" aria-labelledby="dashboard-tab-example">
    <div class="relative overflow-x-auto shadow-md" style={{marginTop:"5vh"}}>
        <table class="w-full text-sm text-left text-black dark:text-black">
            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Apple "
                    </th>
                    <td class="px-6 py-4">
                        gold
                    </td>
                    <td class="px-6 py-4">
                        Lap
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <br></br>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                </tr>
                <br/>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
                <br/>
                <tr class="bg-white shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
                <br></br>
                <tr class="bg-white  shadow-md">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</div>

      
    </div>
</div>


  )
}

export default Missedcall

