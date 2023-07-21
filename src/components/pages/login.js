
import React from 'react'
import bottle from "/Users/Musfar/Desktop/wk/ck/src/bottle-large.svg"
import {Link} from 'react-router-dom'
const Login = () => {

  return (

<div ClassName='' style={{display:'flex'}}>


    <div ClassName='loginred' style={{ width:"50%" , backgroundColor:'maroon'}}>
    <img src={bottle}  style={{marginLeft:"30%" , marginTop:"20%" , marginBottom:"20%"}}/>
</div>





<div ClassName=' white' style={{height:"721px" , width:"50%"}} >
<div ClassName='sign' id='sign' style={{height: '279px',width: "444px"}}>
<form>

    <div class="grid gap-6 mb-6 md:grid-cols-2">  
    </div>
    <h2 class="text-4xl text-red-800 mb-4 mr-70 text-left" >LOGIN</h2>
    <div class="mb-6">
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EMAIL" required/>
    </div> 
    <div class="mb-6">
        <input type="password" id="password" class=" border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PASSWORD" required/>
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 ml-8 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class=" hover:underline" style={{color:"red"}}>terms and conditions</a>.</label>
    </div>
    <div >
    <Link to="dashboard">
    <button id="signinbutton" type="submit" class="text-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-white-500 dark:focus:ring-blue-800 mb-8" >Sign In</button> </Link>
    <Link to="forgotpass" style={{color:"red" ,marginRight:"240px"} } >
    Forgot Password?
    </Link>
</div>
</form>






</div>

    </div>
</div>
  )
}



export default Login
