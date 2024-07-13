import React, { useEffect,useState } from 'react';

const Header = () => {
     
  const [signInForm, setsignInForm] = useState(true);

       const handleSignInForm=()=>{
          setsignInForm(!signInForm)
       }

  return (
<div>
<div className='flex justify-between items-center p-4'>
      <div className='ml-28'>
        <img
          height="60px"
          width="200px"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div> 
      <div className='flex items-center space-x-4 mr-28'>
        <select className='bg-gray-900 border border-gray-500 w-32 px-6 font-bold py-1 rounded-md text-white hover:border-2-zinc-50'>
          <option className='bg-white text-black'>English</option>
          <option className='bg-white text-black'>हिन्दी</option>
        </select>
        <button className='bg-[#E50914] text-white px-3 font-bold py-1 rounded-md'>Sign In</button>
      </div>
      
    </div>
    <form  className='absolute rounded-lg bg-opacity-70 text-white bg-black  p-12 text-center ml-[500px]'>
           <h4 className='text-start text-bold'> {
            signInForm ? "Sign In" :"Sign Up"
         }</h4>
        {
          !signInForm && <input className='mt-5 py-2 px-2 rounded-md w-full bg-slate-800' type="text" placeholder='Name' /> 
        }
        <br></br>
        <input className='mt-5 py-2 px-3 rounded-md w-full bg-slate-800' type="text" placeholder='Email adress' /><br/>
        <input className='mt-5 py-2 px-3 rounded-md w-full bg-slate-800' type="password" placeholder='Password' /><br/>
        <button className='bg-[#E50914] text-white px-3
         w-full font-bold py-1  rounded-md mt-5'>
          {
            signInForm ? "Sign In" :"Sign Up"
         }</button>
       <p className='mt-3 mr-8 text-1xl cursor-pointer' onClick={handleSignInForm}>
         {
          signInForm ? "New To NetFlix ? Sign Up Now" :"Already Have A Account ? Sign In"
       }
        </p>
      </form>
</div>
  );
};

export default Header;
