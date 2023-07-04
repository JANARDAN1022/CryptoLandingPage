import React from 'react';
import Globe from '../../../Assets/Globe.png';

const Signup = () => {
  return (
    <div className='flex justify-center w-[96.5%] items-center p-5 lg:p-12 '>
        <div className='flex p-2 lg:p-5 lg:w-[1500px] justify-center gap-14 md:gap-[100px] lg:gap-[150px] items-center '>
            <div className='flex justify-center items-center '>
          <img src={Globe} alt='Globe.png' className='w-[110px] h-[120px] md:w-[180px] md:h-[220px] lg:w-[346.803px] lg:h-[355.027px] flex-shrink-0'/>
            </div>

            <div className='flex flex-col gap-2 md:gap-5'>
                <span className='text-[#FFF] text-[12px] md:text-[16px] lg:text-[24px] leading-normal font-normal' >Start Now</span>
                <span className='text-[#FFF] text-[14px] md:text-[18px] lg:text-[48px] leading-normal font-normal'>Sign up to learn more</span>
                <span className='text-[#CFCFCF] text-[10px] md:text-[14px] lg:text-[22px] w-[300px] lg:w-[678px] lg:h-[96px] flex-col flex-shrink-0  leading-[32px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</span>
               <div className='flex relative mt-5'>
                <input name='Email' autoComplete='off' placeholder='Enter Your Email' className='placeholder:text-black placeholder:text-[10px] md:placeholder:text-[14px] lg:placeholder:text-[20px] pl-10 w-[200px] h-[30px] md:w-[300px] md:h-[40px] lg:w-[628px] lg:h-[71px] flex-shrink-0 rounded-[10px] bg-[#FFF] outline-none text-[9px] md:text-[14px] lg:text-[18px]'></input>
               <button className='w-[80px] md:w-[110px] lg:w-[219px] absolute right-14  md:h-[40px] md:right-0 h-[30px] lg:h-[71px] flex-shrink-0 rounded-[10px] bg-[#00C4FC] text-[#FFF] text-[10px] md:text-[14px] lg:text-[20px]'>Subscribes</button>
               </div>
            </div>

        </div>
    </div>
  )
}

export default Signup