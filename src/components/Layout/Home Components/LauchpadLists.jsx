import React from 'react';
import RandomOne from '../../../Assets/RandomOne.png';
import RandomTwo from '../../../Assets/RandomTwo.png';
import RandomThree from '../../../Assets/RandomThree.png';



const LauchpadLists = () => {
  return (
    <div className='flex flex-col gap-5 p-2 items-center '>
        <span className="text-[#00C4FC] text-[12px] md:text-[18px] lg:text-[24px] not-italic font-normal leading-normal text-center">
          Papasale
          </span>
          <span className="w-[722px] md:text-[30px] lg:text-[48px] text-center text-[18px] font-normal not-italic leading-normal text-[#FFFFFF]">
           Lauchpad Lists
          </span>
          <div className='flex  gap-5 p-1 flex-wrap justify-center'>
            <div className='gap-3 w-[180px] h-[350px] md:w-[250px] md:h-[430px] lg:w-[480px]  lg:h-[630px] p-5 flex flex-col   flex-shrink-0 rounded-[10px] border border-[#00C4FC] bg-[rgba(47,47,47,0.20)]'>
           
            <div className='flex :justify-between items-center'>
            <img src={RandomOne} alt='RandomOne.png' className='rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[94px] lg:h-[97px] flex-shrink-0'/>
            <button className='inline-flex  w-[100px] h-[30px] lg:w-[100px] lg:h-[40px] justify-center items-center gap-5 rounded-[20px] border-2 border-[#00C4FC] text-[#FFF]'>  Upcoming</button>
          </div>
            
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1 flex-wrap'>
                <span className='text-[#FFF] text-[12px] md:text-[16px] lg:text-[32px] not-italic font-normal leading-normal'>Defy kings Lending </span>
                <span className='text-[#FFF] text-[12px]  md:text-[14px] lg:text-[32px] not-italic font-normal leading-normal'>1 BNB = 69,444.44 DKL </span>
              
                </div>
                <span className='text-[#FFF]  text-[10px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal'>Soft/Hard1B BNB - 36 BNB</span>
                <span className='text-[#FFF] text-[14px] md:text-[18px] lg:text-[32px] not-italic font-normal leading-normal'>18 BNB - 36 BNB</span>
            </div>

            <div className='flex flex-col gap-1 flex-wrap'>
                <div className='flex flex-col gap-1'>
                 <span className='text-[14px] md:text-[18px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Progress{`(0.00%)`}</span>
                 <div className='w-[140px] md:w-[100%] rounded-[10px] h-[8px] lg:h-[16px] bg-gradient-to-r from-[#00ADD8] from-30% to-[#FFF] to-70%'></div>
                </div>

                <div className='flex flex-col gap-1 w-full mt-2 md:mt-0'>
                    <div className='flex justify-between'>
                     <span className=' text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>0 BNB</span>
                     <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>36 BNB</span>
                    </div>
                    <div className='flex justify-between'>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Liquidity %</span>
                     <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>51%</span>
                    </div>
                    <div className='flex justify-between'>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px]not-italic font-normal leading-normal text-[#FFF]'>Lockup Time:</span>
                     <span className='text-[12px]  md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>180 days</span>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-4'>
                    <div className='flex flex-col'>
                   <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Sale stars in:</span>
                   <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>26:19:40:25</span>
                    </div>

                    <button className='text-[#FFF] w-[60px] h-[30px]  md:w-[100px] md:h-[40px] inline-flex justify-center items-center gap-5 rounded-[20px] border-2 border-[#00C4FC]'>View</button>
                </div>
            </div>
           
            </div>

            <div className='gap-3 w-[180px] h-[350px] md:w-[250px] md:h-[430px] lg:w-[480px]  lg:h-[630px] p-5 flex flex-col   flex-shrink-0 rounded-[10px] border border-[#00C4FC] bg-[rgba(47,47,47,0.20)]'>
           
           <div className='flex justify-between items-center'>
           <img src={RandomTwo} alt='RandomTwo.png' className='rounded-full w-[30px] h-[30px] lg:w-[94px] lg:h-[97px] flex-shrink-0'/>
           <button className='inline-flex  w-[100px] h-[30px]  lg:h-[40px] justify-center items-center gap-5 rounded-[20px] border-2 border-[#00C4FC] text-[#FFF]'>  Upcoming</button>
          </div>
           
           <div className='flex flex-col gap-2 flex-wrap'>
               <div className='flex flex-col gap-1'>
               <span className='text-[#FFF] text-[12px] md:text-[16px] lg:text-[32px] not-italic font-normal leading-normal'>Fedy kings Lending  </span>
               <span className='text-[#FFF] text-[12px] md:text-[14px] lg:text-[32px] not-italic font-normal leading-normal'>1 BNB = 69,444.44 DKL </span>
             
               </div>
               <span className='text-[#FFF] text-[10px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal'>Soft/Hard1B BNB - 36 BNB</span>
               <span className='text-[#FFF] text-[14px] md:text-[18px] lg:text-[32px] not-italic font-normal leading-normal'>18 BNB - 39 BNB</span>
           </div>

           <div className='flex flex-col gap-1'>
               <div className='flex flex-col gap-1'>
                <span className=' text-[14px] md:text-[18px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Progress{`(0.00%)`}</span>
                <div className='w-[140px] md:w-[100%] rounded-[10px] h-[8px] lg:h-[16px] bg-gradient-to-r from-[#00ADD8] from-70% to-[#FFF] to-30%'></div>
               </div>

               <div className='flex flex-col gap-1 w-full mt-2 md:mt-0'>
                   <div className='flex justify-between'>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>0 BNB</span>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>39 BNB</span>
                   </div>
                   <div className='flex justify-between'>
                   <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Liquidity %</span>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>51%</span>
                   </div>
                   <div className='flex justify-between'>
                   <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Lockup Time:</span>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>160 days</span>
                   </div>
               </div>

               <div className='flex justify-between items-center mt-4'>
                   <div className='flex flex-col'>
                  <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Sale stars in:</span>
                  <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>26:19:40:25</span>
                   </div>

                   <button className='text-[#FFF] w-[60px] h-[30px] md:w-[100px] md:h-[40px] lg:w-[100px] lg:h-[40px] inline-flex justify-center items-center gap-5 rounded-[20px] border-2 border-[#00C4FC]'>View</button>
               </div>
           </div>
          
           </div>


           <div className='gap-3 w-[180px] h-[350px] md:w-[250px] md:h-[430px] lg:w-[480px]  lg:h-[630px] p-5 flex flex-col   flex-shrink-0 rounded-[10px] border border-[#00C4FC] bg-[rgba(47,47,47,0.20)]'>
           
           <div className='flex justify-between items-center'>
           <img src={RandomThree} alt='RandomThree.png' className='rounded-full w-[30px] h-[30px] lg:w-[97px] lg:h-[97px] flex-shrink-0'/>
           <button className='inline-flex  w-[100px] h-[30px] lg:w-[100px] lg:h-[40px] justify-center items-center gap-5 rounded-[20px] border-2 border-[#00C4FC] text-[#FFF]'>  Upcoming</button>
           </div>
           
           <div className='flex flex-col gap-2 flex-wrap'>
               <div className='flex flex-col gap-1'>
               <span className='text-[#FFF] text-[12px] md:text-[16px] lg:text-[32px] not-italic font-normal leading-normal'>Define kings Lending  </span>
               <span className='text-[#FFF] text-[12px] md:text-[14px] lg:text-[32px] not-italic font-normal leading-normal'>1 BNB = 69,444.44 DKL </span>
             
               </div>
               <span className='text-[#FFF] text-[10px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal'>Soft/Hard1B BNB - 36 BNB</span>
               <span className='text-[#FFF] text-[14px] md:text-[18px] lg:text-[32px] not-italic font-normal leading-normal'>18 BNB - 42 BNB</span>
           </div>

           <div className='flex flex-col gap-1 flex-wrap'>
               <div className='flex flex-col gap-1'>
                <span className='text-[14px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Progress{`(0.00%)`}</span>
                <div className='w-[140px]  md:w-[100%] rounded-[10px] h-[8px] lg:h-[16px] bg-gradient-to-r from-[#00ADD8] from-90% to-[#FFF] to-10%'></div>
               </div>

               <div className='flex flex-col gap-1 w-full mt-2 md:mt-0'>
                   <div className='flex justify-between'>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>0 BNB</span>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>42 BNB</span>
                   </div>
                   <div className='flex justify-between'>
                   <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Liquidity %</span>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>51%</span>
                   </div>
                   <div className='flex justify-between'>
                   <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Lockup Time:</span>
                    <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>180 days</span>
                   </div>
               </div>

               <div className='flex justify-between items-center mt-4'>
                   <div className='flex flex-col'>
                  <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>Sale stars in:</span>
                  <span className='text-[12px] md:text-[16px] lg:text-[24px] not-italic font-normal leading-normal text-[#FFF]'>26:19:40:25</span>
                   </div>

                   <button className='text-[#FFF] w-[60px] h-[30px] md:w-[100px] md:h-[40px] lg:w-[100px] lg:h-[40px] inline-flex justify-center items-center gap-5 rounded-[20px] border-2 border-[#00C4FC]'>View</button>
               </div>
           </div>
          
           </div>

          </div>
    </div>
  )
}

export default LauchpadLists;