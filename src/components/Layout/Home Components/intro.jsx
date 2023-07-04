import React from 'react';
import PlayBTN from '../../../Assets/PlayBTN.png';
import GradientBG from '../../../Assets/GradientBG.png';
import Bitcoin from '../../../Assets/Bitcoin.png';
//import DotGlow from '../../../Assets/DotGlow.png';

const Intro = () => {

   return (
    <div className='h-[593px] flex pt-0 pr-0 lg:pr-10 lg:pt-10 relative '>
        <div className=' flex flex-col sm:ml-0 lg:ml-28 p-5 lg:p-10 gap-4 relative z-10'>
            <img src={GradientBG} alt='BG.png' className='absolute top-[-150px] left-[-220px] w-[300px] h-[300px] lg:w-[561.361px] lg:h-[561.099px] bg-[#00C4F4] bg-opacity-10 rounded-full opacity-[0.4099999964237213]'/>
        <div className='w-[180px] h-[300px] lg:w-[818px]  justify-center  lg:h-[330px]  flex flex-col text-[#FFF] text-[22px]  lg:text-[60px] font-sans not-italic font-bold leading-[40px] lg:leading-[110px]'>
         <span className='lg:block'>Best place buy and </span>
         <span className=''>  sell <span className='text-[#00C4F4]'>crypto</span> </span>
         <span className=''>  currency <span className='text-[#00C4F4]'>asset</span></span>
        </div>
       
         <div className='text-[14px] w-[350px] sm:w-[500px] lg:w-[817px] flex flex-col text-[#CFCFCF] sm:text-[14px]  lg:text-[20px] font-Outfit not-italic font-normal leading-[32px]'>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</span>
       </div>

       <div className='flex gap-5 lg:gap-12'>
        <button className='w-[120px] h-[50px] lg:w-[187px] lg:h-[71px] rounded-[10px] bg-[#00C4F4] text-[#FFF] text-[15px]  lg:text-[20px] not-italic font-semibold leading-normal'>Get Started</button>
       <div className='flex gap-2 border border-[#00C4F4] rounded-[10px] w-[170px] h-[50px] lg:w-[250px] lg:h-[71px]  justify-center items-center'>
        <img className='w-[15px] h-[18px] lg:w-[23px] lg:h-[28px] text-[#00C4F4]' src={PlayBTN} alt='PlayBTN' />
        <button className='text-[#FFF] text-[15px] lg:text-[20px] not-italic font-semibold leading-normal'>Watch Tutorials</button>
       </div>
       </div>

        <div>

        </div>

        </div>


        <div className='w-[500px] flex justify-center items-center absolute right-[-50px] top-[50px] md:right-[0px] lg:right-[0px] lg:top-[20px]'> 
             <img src={Bitcoin} alt='Bitcoin.png'  className='w-[250px] h-[250px] md:w-[550px] md:h-[500px] lg:w-[600.972px] lg:h-[550.007px] bg-transparent '/>
        </div>
    </div>
  )
  
}

export default Intro