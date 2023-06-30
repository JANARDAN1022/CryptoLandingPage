import React from 'react';
import Map from '../../../Assets/Map.png';




const OurVision = () => {
  return (
    <div className='flex mt-20 p-14'>
        <div className='flex flex-1 flex-col gap-10'>
            <div className='flex flex-col'>
           <span className="text-[#00C4FC]  text-[24px] not-italic font-normal leading-normal">Our vision</span>
           <span className="w-[619px] text-[48px]  font-normal not-italic leading-normal text-[#FFFFFF]">Users from all over the world</span>
           <span className="w-[669px] h-[66px] flex flex-col flex-shrink-0 text-[#CFCFCF] text-[18px] font-normal leading-[32px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</span>
            </div>

            <div className='flex gap-10'>
             <div className='flex flex-col'>
             <span className='text-[#FFF] text-[60px] not-italic font-normal leading-normal' >32K+</span>
             <span className='text-[#CFCFCF] text-[18px] not-italic font-normal leading-normal'>People Joined</span>
             </div>

             <div className='flex flex-col'>
             <span className='text-[#FFF] text-[60px] not-italic font-normal leading-normal' >250+</span>
             <span className='text-[#CFCFCF] text-[18px] not-italic font-normal leading-normal'>Vip Users</span>
             </div>

             <div className='flex flex-col'>
             <span className='text-[#FFF] text-[60px] not-italic font-normal leading-normal' >87+</span>
             <span className='text-[#CFCFCF] text-[18px] not-italic font-normal leading-normal'>Big Company</span>
             </div>
            </div>
  
        </div>


        <div className='flex flex-1 relative'>
          <img src={Map} alt='Map.png' className='w-[747px] h-[378px] flex-shrink-0'/>
         </div>
    </div>
  )
}

export default OurVision