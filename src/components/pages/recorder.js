import React, { useEffect,useState } from 'react';
import { Tabs } from 'flowbite';
import { hover } from '@testing-library/user-event/dist/hover';
import Footer from '../common/footer';

const Recorder = () => {

    const [tabs, setTabs] = useState(null)


    useEffect(() => {
  
      const tabElements = [
        {
            id: 'profile',
            triggerEl: document.querySelector('#profile-tab-example'),
            targetEl: document.querySelector('#profile-example')
        },
        {
            id: 'dashboard',
            triggerEl: document.querySelector('#dashboard-tab-example'),
            targetEl: document.querySelector('#dashboard-example')
        },
        {
            id: 'settings',
            triggerEl: document.querySelector('#settings-tab-example'),
            targetEl: document.querySelector('#settings-example')
        },
        {
            id: 'contacts',
            triggerEl: document.querySelector('#contacts-tab-example'),
            targetEl: document.querySelector('#contacts-example')
        }
    ];
    // options with default values
  const options = {
    defaultTabId: 'settings',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
  };
  
  const tabsInstance = new Tabs(tabElements, options); // Initialize tabs
  setTabs(tabsInstance); // Store the tabs instance in the state
  
  tabsInstance.show('profile');
  
    }, []);
  
  
  
    useEffect(() => {
      // Check if tabs has been initialized before accessing its methods
      if (tabs) {
        // get the tab object based on ID
        tabs.getTab('contacts');
  
        // get the current active tab object
        tabs.getActiveTab();
      }
    }, [tabs]);










  return (
    <div style={{height:"100%" , paddingLeft:"15vh" , paddingTop:"30px" , backgroundColor:"#f5f5f5"}}> 
    <div style={{textAlign:'initial' ,fontFamily:'sans-serif'}} >

        <div className='flex justify-between'>
        <h3 style={{color:"red" ,fontWeight:"600" , fontSize:"30px" }}> CALL RECORDS </h3>
        <div className=' mr-8'>
    <button  type="button" class="   py-1 px-5 mr-2 mb-2 text-sm font-bold text-red-800 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-100 dark:text-red-500 dark:border-gray-400 hover:border-red-600 dark:hover:text-red-500 dark:hover:bg-red-200">Export Data</button>
</div>
        </div>
        
        <p><b>Use this page to view the call logs or call history, including inbound, outbound, and missed calls.</b></p>
    </div>
    
    
    <div style={{marginRight:"40%",paddingTop:"6vh"}}>

    <div class="mb-4   ">
    <ul class="flex flex-wrap -mb-px text-lg font-medium text-center  " id="tabExample" role="tablist">
        <li class="mr-2" role="presentation">
        <button class=" underline text-black black-to-red " id="profile-tab-example" type="button" role="tab" aria-controls="profile-example" aria-selected="false">INCOMING CALLS</button>
        </li>
        <li class="mr-2" role="presentation">
        <button class=" pl-2 underline text-black black-to-red" id="dashboard-tab-example" type="button" role="tab" aria-controls="dashboard-example" aria-selected="false">OUTGOING CALLS</button>
        </li>
        <li class="mr-2" role="presentation">
        <button class=" pl-2 underline text-black black-to-red" id="settings-tab-example" type="button" role="tab" aria-controls="settings-example" aria-selected="false">MISSED CALLS</button>
        </li>
        <li role="presentation">
        <button class=" pl-2 underline text-black black-to-red" id="contacts-tab-example" type="button" role="tab" aria-controls="contacts-example" aria-selected="false">EXT TO EXT</button>
        </li>
    </ul>
</div>



    <form>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative" style={{    marginRight: "570px", marginTop: "20px"}}>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
        </div>
    </form>



    </div>
    
    
    <div class="relative overflow-x-auto " style={{marginTop:"5vh"}}>


    <div id="tabContentExample">
    <div class="hidden rounded-lg  pb-16 pr-8" id="profile-example" role="tabpanel" aria-labelledby="profile-tab-example">
    <div class="relative overflow-x-auto shadow-md" style={{marginTop:"5vh"}}>
    <table class="w-full text-sm text-left text-gray-300 dark:text-gray-600 ">
        <thead class="text-xs text-gray-200 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SR.
                </th>
                <th scope="col" class="px-6 py-3">
                    Execution Date
                </th>
                <th scope="col" class="px-6 py-3">
                    no.of attempts
                </th>
                <th scope="col" class="px-6 py-3">
                    Answered calls
                </th>
                <th scope="col" class="px-6 py-3">
                    Not Answered calls
                </th>
                <th scope="col" class="px-6 py-3">
                    0-30
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="  border-y border-gray-300 left-1/2 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     1
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    14              </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    9
                </td>
                <td class="px-6 py-4">
                    19
                </td>
            </tr>
            
            <tr class="bg-white ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    2
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                     14
                </td>
                <td class="px-6 py-4">
                    8
                </td>
                <td class="px-6 py-4">
                    9
                </td>
                <td class="px-6 py-4">
                    19
                </td>
            </tr>
            
            <tr class=" border-y border-gray-300 left-1/2 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    3
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            <tr class="bg-white ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    4
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            
            <tr class="   border-y border-gray-300 left-1/2">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    5
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            
            <tr class=" ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    6
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            
            <tr class="  border-y border-gray-300   ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     7
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            <tr class="   ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     7
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            <tr class="  border-y border-gray-300   ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     7
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</div>



{/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div class="hidden pr-8 pb-16 rounded-lg " id="dashboard-example" role="tabpanel" aria-labelledby="dashboard-tab-example">
    <div class="relative overflow-x-auto shadow-md" style={{marginTop:"5vh"}}>
    <table class="w-full text-sm text-left text-gray-300 dark:text-gray-600 ">
        <thead class="text-xs text-gray-200 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SR.
                </th>
                <th scope="col" class="px-6 py-3">
                    Execution Date
                </th>
                <th scope="col" class="px-6 py-3">
                    no.of attempts
                </th>
                <th scope="col" class="px-6 py-3">
                    Answered calls
                </th>
                <th scope="col" class="px-6 py-3">
                    Not Answered calls
                </th>
                <th scope="col" class="px-6 py-3">
                    0-30
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="  border-y border-gray-300 left-1/2 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     1
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    14              </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    9
                </td>
                <td class="px-6 py-4">
                    19
                </td>
            </tr>
            
            <tr class="bg-white ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    2
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                     14
                </td>
                <td class="px-6 py-4">
                    8
                </td>
                <td class="px-6 py-4">
                    9
                </td>
                <td class="px-6 py-4">
                    19
                </td>
            </tr>
            
            <tr class=" border-y border-gray-300 left-1/2 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    3
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            <tr class="bg-white ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    4
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            
            <tr class="   border-y border-gray-300 left-1/2">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    5
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            
            <tr class=" ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                    6
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            
            <tr class="  border-y border-gray-300   ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     7
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            <tr class="   ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     7
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
            <tr class="  border-y border-gray-300   ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-gray-600">
                     7
                </th>
                <td class="px-6 py-4">
                12 Jun 2023
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    13
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</div>


    {/* ////////////////////////////////////////////////////// */}
    <div class="hidden p-4 rounded-lg " id="settings-example" role="tabpanel" aria-labelledby="settings-tab-example">
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
                        Apple Pro 17"
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
    {/* ///////////////////////////////////////////////////////////// */}
    <div class="hidden p-4 rounded-lg " id="contacts-example" role="tabpanel" aria-labelledby="contacts-tab-example">
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
               
                </tr>
                <br></br>
                <tr class="bg-white  shadow-md">
                 
                </tr>
            </tbody>
        </table>
    </div>    
  </div>
    {/* /////////////////////////////////////////////////////////////////////// */}
</div>
    </div>

<div>
    <Footer/>
</div>


</div>

  )
}

export default Recorder
