import React from 'react';
import Globe from '../../../Assets/Globe.png';

const Signup = () => {
  return (
    <div className='flex justify-center items-center p-12'>
        <div className='flex p-5 w-[1500px] justify-center gap-[150px] items-center'>
            <div className='flex justify-center items-center '>
          <img src={Globe} alt='Globe.png' className='w-[346.803px] h-[355.027px] flex-shrink-0'/>
            </div>

            <div className='flex flex-col gap-5'>
                <span className='text-[#FFF] text-[24px] leading-normal font-normal' >Start Now</span>
                <span className='text-[#FFF] text-[48px] leading-normal font-normal'>Sign up to learn more</span>
                <span className='text-[#CFCFCF] text-[22px] w-[678px] h-[96px] flex-col flex-shrink-0  leading-[32px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</span>
               <div className='flex relative mt-5'>
                <input name='Email' autoComplete='off' placeholder='Enter Your Email' className='placeholder:text-black placeholder:text-[20px] pl-10 w-[628px] h-[71px] flex-shrink-0 rounded-[10px] bg-[#FFF] outline-none text-[18px]'></input>
               <button className='w-[219px] absolute right-0 h-[71px] flex-shrink-0 rounded-[10px] bg-[#00C4FC] text-[#FFF] text-[20px]'>Subscribes</button>
               </div>
            </div>

        </div>
    </div>
  )
}

export default Signup