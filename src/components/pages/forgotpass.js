import React from 'react'

const Forgotpass = () => {
  return (
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
    
  )
}

export default Forgotpass
