import React from 'react';
import Graph from '../../../Assets/Graph.png';

const MoreAboutUs = ({ref}) => {
  return (
    <div ref={ref} className='flex  mt-10 p-5  md:gap-2 lg:p-10 lg:g-10 w-[100%] '>
        <div className='flex-1 lg:ml-10'>
      <img src={Graph} alt='Graph.png' className='w-[220px] h-[200px] md:w-[320px] md:h-[250px] lg:w-[600px] lg:h-[400px] rounded-[10px] border-[#FFF] border-2' />
        </div>

        <div className='flex flex-col flex-1 justify-center gap-1 lg:gap-5'>
        <span className='text-[#00C4FC] text-[12px] md:text-[14px] lg:text-[24px] not-italic font-normal leading-normal'>About us</span>
        <span className='text-[#FFF] text-[18px] md:text-[20px] lg:text-[48px] not-italic font-normal leading-normal'>Accelerate the {`world's`} transition</span>
        <span className='font-normal leading-[32px] not-italic text-[10px] md:text-[14px] lg:text-[20px] text-[#CFCFCF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiulgod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</span>
        <div className='flex justify-center items-center text-[10px] md:text-[14px] lg:text-[18px] w-[120px] h-[20px] md:w-[140px] md:h-[40px] lg:w-[207px] lg:h-[71px] rounded-[10px] bg-[#00C4FC] p-5 lg:p-10 text-[#FFFFFF]'>
        <button >More About us</button>
        </div>
        </div>
    </div>
  )
}

export default MoreAboutUs;