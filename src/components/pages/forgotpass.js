import React, { useEffect,useState } from 'react';
import { Tabs } from 'flowbite';





const Forgotpass = () => {
  

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

tabsInstance.show('dashboard');

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


    <div>

      
<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabExample" role="tablist">
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="profile-tab-example" type="button" role="tab" aria-controls="profile-example" aria-selected="false">Profile</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab-example" type="button" role="tab" aria-controls="dashboard-example" aria-selected="false">Dashboard</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab-example" type="button" role="tab" aria-controls="settings-example" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab-example" type="button" role="tab" aria-controls="contacts-example" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>


{/* /////////////////////////////////////////////// */}
<div id="tabContentExample">
    <div class="hidden p-4 rounded-lg bg-gray-50 " id="profile-example" role="tabpanel" aria-labelledby="profile-tab-example">
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


    {/* ////////////////////////////////////////////////////// */}
    <div class="hidden p-4 rounded-lg bg-gray-50 " id="settings-example" role="tabpanel" aria-labelledby="settings-tab-example">
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
    {/* ///////////////////////////////////////////////////////////// */}
    <div class="hidden p-4 rounded-lg bg-gray-50 " id="contacts-example" role="tabpanel" aria-labelledby="contacts-tab-example">
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
    {/* /////////////////////////////////////////////////////////////////////// */}
</div>





    <form>
      <div className='className="mt-64 ml-64 mr-32"'>
    <div className='mt-64 ml-32'  style={{width:'30%' , alignItems:'center'}}>
         <div class="mb-6 mt">
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EMAIL" required/>
    </div> 
    <div class="mb-6">
        <input type="password" id="password" class=" border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PASSWORD" required/>
        
    </div>
    
    </div>
    <button id="signinbutton" type="submit" class="text-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-white-500 dark:focus:ring-blue-800 mb-8 mr-4" >Recover</button> 
    </div>

    </form>

  </div>
    
  )
}

export default Forgotpass
