import React from "react";
import logo42 from "../img/42logo.png"
function Login()
{
  return(
    <div className='relative flex flex-col justify-center p-8 items-center md:p-14 '>
          <button className='font-bold hover:scale-105 duration-300 w-80  bg-gradient-to-br from-[#FE754D] to-[#ce502a]  text-white p-2 rounded-full mb-6 md:w-80 '>
            <img src={logo42} alt="42" className='w-6 h-6 inline mr-2' />
            <a href="https://profile.intra.42.fr/">Log In with Intra</a>
          </button>
          <div className='text-center text-white text-xs'> 
            Or sign in with
            <a href="#" className='font-bold  text-[#7F7B86] hover:text-white'> Two-Factor Authentication</a>
          </div>
    </div>
  );
}
export default Login;