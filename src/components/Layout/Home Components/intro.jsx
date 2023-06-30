import React from 'react';
import PlayBTN from '../../../Assets/PlayBTN.png';
import GradientBG from '../../../Assets/GradientBG.png';
import Bitcoin from '../../../Assets/Bitcoin.png';
//import DotGlow from '../../../Assets/DotGlow.png';

const Intro = () => {

   return (
    <div className=' h-[593px] flex  items-center pr-10 pt-10 relative'>
        <div className='flex flex-col ml-28 p-10 gap-4 relative z-10'>
            <img src={GradientBG} alt='BG.png' className='absolute top-[-150px] left-[-220px] w-[561.361px] h-[561.099px] bg-[#00C4F4] bg-opacity-10 rounded-full opacity-[0.4099999964237213]'/>
        <div className='w-[818px]   justify-center  h-[330px]  flex flex-col text-[#FFF] text-[60px] font-sans not-italic font-bold leading-[110px] '>
         <span className='block'>Best place buy and </span>
         <span className=''>  sell <span className='text-[#00C4F4]'>crypto</span> </span>
         <span className=''>  currency <span className='text-[#00C4F4]'>asset</span></span>
        </div>
       
         <div className='w-[817px] flex flex-col text-[#CFCFCF] text-[20px] font-Outfit not-italic font-normal leading-[32px]'>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</span>
       </div>

       <div className='flex gap-12'>
        <button className='w-[187px] h-[71px] rounded-[10px] bg-[#00C4F4] text-[#FFF] text-[20px] not-italic font-semibold leading-normal'>Get Started</button>
       <div className='flex gap-2 border border-[#00C4F4] rounded-[10px] w-[250px] h-[71px]  justify-center items-center'>
        <img className='w-[23px] h-[28px] text-[#00C4F4]' src={PlayBTN} alt='PlayBTN' />
        <button className='text-[#FFF] text-[20px] not-italic font-semibold leading-normal'>Watch Tutorials</button>
       </div>
       </div>

        <div>

        </div>

        </div>


        <div className='absolute right-[50px] top-[20px]'> 
           <div >
             <img src={Bitcoin} alt='Bitcoin.png'  className=' w-[600.972px] h-[550.007px] bg-transparent '/>
            </div>
        </div>
                
    </div>
  )
  
}

export default Intro