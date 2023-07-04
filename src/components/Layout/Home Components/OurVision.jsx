import React from 'react';
import Map from '../../../Assets/Map.png';




const OurVision = () => {
  return (
    <div className='flex mt-20 p-8 md:p-12 lg:p-14 '>
        <div className='flex flex-1 flex-col gap-3 md:gap-8 lg:gap-10'>
            <div className='flex flex-col gap-2 lg:gap-0 flex-wrap'>
           <span className="text-[#00C4FC]  lg:text-[24px] text-[12px] sm:text-[15px] md:text-[18px] not-italic font-normal leading-normal">Our vision</span>
           <span className="lg:w-[619px] lg:text-[48px] text-[15px] md:text-[20px] sm:text-[18px] font-normal not-italic leading-normal text-[#FFFFFF]">Users from all over the world</span>
           <span className="lg:w-[669px] lg:h-[66px] md:w-[350px] w-[250px] text-[16px] md:text-[22px] flex flex-col flex-shrink-0 text-[#CFCFCF] lg:text-[18px] font-normal leading-[32px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</span>
            </div>

            <div className='flex gap-5 md:gap-8 lg:gap-10 flex-wrap'>
             <div className='flex flex-col'>
             <span className='text-[#FFF]  text-[20px] lg:text-[60px] md:text-[30px] not-italic font-normal leading-normal' >32K+</span>
             <span className='text-[#CFCFCF] text-[10px] lg:text-[18px] md:text-[15px] not-italic font-normal leading-normal'>People Joined</span>
             </div>

             <div className='flex flex-col'>
             <span className='text-[#FFF]  text-[20px] lg:text-[60px] md:text-[30px] not-italic font-normal leading-normal' >250+</span>
             <span className='text-[#CFCFCF] text-[10px] lg:text-[18px] md:text-[15px] not-italic font-normal leading-normal'>Vip Users</span>
             </div>

             <div className='flex flex-col'>
             <span className='text-[#FFF]  text-[20px] lg:text-[60px] md:text-[30px] not-italic font-normal leading-normal' >87+</span>
             <span className='text-[#CFCFCF] text-[10px] lg:text-[18px] md:text-[15px] not-italic font-normal leading-normal'>Big Company</span>
             </div>
            </div>
  
        </div>


        <div className='flex flex-1 relative'>
          <img src={Map} alt='Map.png' className='w-[440px] h-[250px] lg:w-[747px] lg:h-[378px] flex-shrink-0'/>
         </div>
    </div>
  )
}

export default OurVision