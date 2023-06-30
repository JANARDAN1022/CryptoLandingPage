import React,  {useState } from 'react';
import Logo from '../../Assets/Logo.png';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const [Active,setActive]=useState('Home');
    
  return (
    <div className='bg-[#030B15] h-[100px] border border-[#676767] p-5 flex'>
        <div className='flex justify-between  w-[100%] items-center p-5'>
           
            <div className='flex gap-3 ml-10 w-[207px] h-[51px] items-center '>
           <img src={Logo} alt='Logo.png' className='h-[51px] w-[51px]'/>
           <span className='text-[#FFFFFF] text-[40px] font-Outfit font-semibold'>Coinary</span>
            </div>

            <div className='text-[18px]  w-[598px] h-[23px] flex justify-between sm:font-normal font-medium not-italic leading-normal'>  
                <Link to='/' onClick={()=>setActive('Home')} className={`${Active==='Home'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4]`}>Home</Link>
                <Link to='/' onClick={()=>setActive('About')} className={`${Active==='About'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4]`}>About</Link>
                <Link to='/' onClick={()=>setActive('Our App')} className={`${Active==='Our App'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4]`}>Our App</Link>
                <Link to='/' onClick={()=>setActive('Pages')} className={`${Active==='Pages'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4]`}>Pages</Link>
                <Link to='/' onClick={()=>setActive('Token Sale')} className={`${Active==='Token Sale'?'text-[#00C4F4]':'text-[#FFFFFF]'} hover:text-[#00C4F4]`}>Token Sale</Link>
            </div>
   
              <div className='flex justify-center items-center rounded-[10px] text-[#FFFFFF] text-[20px] not-italic font-semibold leading-normal font-Outfit bg-[#00C4F4] w-[209px] h-[71px]'>
              <Link to='/'>Download App</Link>
              </div>


        </div>
    </div>
  )
}

export default Navbar