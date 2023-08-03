
import React from 'react'
import bottle from "/Users/Musfar/Desktop/wk/ck/src/bottle-large.svg"
import {Link} from 'react-router-dom'
const Login = () => {


 
  return (

<div ClassName='' style={{display:'flex'}}>


    <div ClassName='loginred ' style={{ width:"50%" , height:"100vh", backgroundColor:'red'}}>
    <div className='flex justify-center items-center h-screen '>
    <img className='' src={bottle} />
    </div>

</div>





<div ClassName=' white ' style={{height:"100vh" , width:"50%"}} >
<div ClassName='sign flex justify-center items-center h-screen ' id='sign'>
<form>

    <div class="grid gap-6 mb-6 md:grid-cols-2">  
    </div>
    <h2 class="text-4xl mb-8 mr-70 text-left" style={{color:"red"}} >LOGIN</h2>
    <div class="mb-3">
        <input type="email" id="email"  class=" rounded-sm bg-gray-50 border border-gray-100 text-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500 italic" placeholder="EMAIL" required/>
    </div> 
    <div class="mb-3">
        <input type="password" id="password" class=" rounded-sm border border-gray-300 text-white-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500 italic" placeholder="PASSWORD" required/>
    </div> 

 <div class="mb-2" style={{marginTop:"-30px"}}>
<label for="countries" class="italic block mb-2 text-sm font-medium text-gray-200 dark:text-white">Select an option</label>
<select id="countries" class="italic rounded-sm border border-gray-300 text-white-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-200  dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose your role</option>
  <option value="US">Admin</option>
  <option value="CA">User</option>
  <option value="FR">Super Admin</option>

</select>
</div> 
<div className='text-left mb-8 text-sm'>
<p>
  This site is protected by hCaptcha and its <u>Privacy Policy</u> and <u> Terms of </u>
    Service apply
</p>
</div>
   
    
    <div className='flex ' style={{backgroundColor:""}} >
    <Link to="forgotpass" style={{color:"red" , fontFamily:'sans-serif', fontSize:"20px", marginRight: "110px" , marginTop:"10px" } } >
    Forgot Password?
    </Link>

    <Link to="dashboard" >
    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login</button>
    </Link>
</div>
</form>






</div>

    </div>
</div>
  )
}



export default Login
