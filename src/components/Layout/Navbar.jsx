import React,  {useState } from 'react';
import Logo from '../../Assets/Logo.png';
import {Link} from 'react-router-dom';
//import '../Layout/Home Components/Mediaqueries/Navbar.css';

const Navbar = () => {
    const [Active,setActive]=useState('Home');
    
  return (
    <header className='
    bg-[#030B15]  border border-[#676767]'>
        <div className='container mx-auto flex flex-wrap  p-5 flex-col md:flex-row 1 items-center'>
           
            <Link className='flex font-medium items-center mb-4 md:mb-2'>
           <img src={Logo} alt='Logo.png' className='h-[51px] w-[51px]'/>
           <span className='text-[#FFFFFF] text-3xl font-Outfit font-semibold ml-3'>Coinary</span>
            </Link>

            <nav className='flex flex-wrap md:ml-auto md:mr-auto items-center text-sm sm:text-base lg:text-lg justify-center  font-medium not-italic leading-normal'>  
                <Link to='/' onClick={()=>setActive('Home')} className={`${Active==='Home'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4] mr-2 sm:mr-5 lg:mr-12`}>Home</Link>
                <Link to='/' onClick={()=>setActive('About')} className={`${Active==='About'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4] mr-2 sm:mr-5 lg:mr-12`}>About</Link>
                <Link to='/' onClick={()=>setActive('Our App')} className={`${Active==='Our App'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4] mr-2 sm:mr-5 lg:mr-12`}>Our App</Link>
                <Link to='/' onClick={()=>setActive('Pages')} className={`${Active==='Pages'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4] mr-2 sm:mr-5 lg:mr-12`}>Pages</Link>
                <Link to='/' onClick={()=>setActive('Token Sale')} className={`${Active==='Token Sale'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4] mr-2 sm:mr-5 lg:mr-12`}>Token Sale</Link>
            </nav>
   
              <button className='cursor-pointer  inline-flex  items-center rounded-[10px] text-[#FFFFFF]  not-italic font-semibold leading-normal font-Outfit bg-[#00C4F4] p-4 lg:py-5 lg:px-8 focus:outline-none text-lg mt-5 md:mt-0'>
              <Link to='/'>Download App</Link>
              </button>
        </div>
    </header>
  )
}

export default Navbar