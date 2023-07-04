import React from 'react';
import bitcoinThreeD from '../../../Assets/bitcoinThreeD.png';
import profile from '../../../Assets/profile.png';
import BlueSpot from '../../../Assets/BlueSpot.png';
import likedislike from '../../../Assets/likedislike.png';
import musicplay from '../../../Assets/musicplay.png';
import star from '../../../Assets/star.png';

const OurFeatures = () => {
  return (
    <div className='flex flex-col p-10 gap-20'>
         <div className="flex justify-center p-5 w-[100%] mt-20 ">
        <div className="flex flex-col self-center items-center gap-2 w-[1200px]">
        <span className="text-[#00C4FC] text-[12px] lg:text-[24px] not-italic font-normal leading-normal">
          Our Features
          </span>
          <span className="lg:w-[722px] lg:text-[48px] text-center text-[18px] font-normal not-italic leading-normal text-[#FFFFFF]">
           All you need is here
          </span>
          <span  className="w-[340px] h-max lg:w-[1102px] lg:h-[65px] ml-5 lg:ml-0 text-[14px] lg:text-[18px] flex flex-col flex-shrink-0 text-[#CFCFCF] font-normal leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute mollit anim id est
            laborum.
          </span>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex   flex-col gap-5 flex-wrap'>
            <div className='w-[150px] h-[250px] md:w-[250px] md:h-[300px]  lg:w-[395px] lg:h-[406px] flex flex-col gap-5 justify-center items-center rounded-[10px] border-[5px] border-[#00add8] bg-[#030B15] shadow-[0px_0px_10px_0px_rgba(0, 173, 216, 1)]'>
            <div className="relative w-[50px] lg:w-[100px] p-1 justify-center flex  items-center h-[50px] lg:h-[100px]">
            <img
              className=" bg-transparent w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={profile}
              alt="profile.png"
            />
            <img src={BlueSpot} alt='BlueSpot.png' className='absolute opacity-70'/>
          </div>
          <span className="flex w-[100px] md:w-[180px] lg:w-[231px] flex-col text-[#FFF] text-[12px] md:text-[20px] lg:text-[26px] font-normal leading-normal text-center">
          Free trial Account
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[9px] md:text-[14px] lg:text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
              
            </div>

            <div className='w-[150px] h-[250px] md:w-[250px] md:h-[300px]  lg:w-[395px] lg:h-[406px] flex flex-col gap-5 justify-center items-center rounded-[10px] border-[5px] border-[#00add8] bg-[#030B15] shadow-[0px_0px_10px_0px_rgba(0, 173, 216, 1)]'>
            <div className="relative w-[50px] lg:w-[100px] p-1 justify-center flex  items-center h-[50px] lg:h-[100px]">
            <img
              className=" bg-transparent w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={likedislike}
              alt="profile.png"
            />
            <img src={BlueSpot} alt='BlueSpot.png' className='absolute opacity-70'/>
          </div>
          <span className="flex w-[100px] md:w-[180px] lg:w-[231px] flex-col text-[#FFF] text-[12px] md:text-[20px] lg:text-[26px] font-normal leading-normal text-center">
          Affordable
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[9px] md:text-[14px] lg:text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
              
            </div>

        </div>

        <div className='flex justify-center items-center'>
            <img src={bitcoinThreeD} alt='bitcoinThreeD.png' className='w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[707px] lg:h-[560px] flex-shrink-0'/>

        </div>

        <div className='flex flex-col gap-5'>
        <div className='w-[150px] h-[250px] md:w-[250px] md:h-[300px]  lg:w-[395px] lg:h-[406px] flex flex-col gap-5 justify-center items-center rounded-[10px] border-[5px] border-[#00add8] bg-[#030B15] shadow-[0px_0px_10px_0px_rgba(0, 173, 216, 1)]'>
            <div className="relative w-[50px] lg:w-[100px] p-1 justify-center flex  items-center h-[50px] lg:h-[100px]">
            <img
              className=" bg-transparent w-[25px] h-[25md:w-[40px] md:h-[40px] px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={star}
              alt="profile.png"
            />
            <img src={BlueSpot} alt='BlueSpot.png' className='absolute opacity-70'/>
          </div>
          <span className="flex w-[100px] md:w-[180px] lg:w-[231px] flex-col text-[#FFF] text-[12px] md:text-[20px] lg:text-[26px] font-normal leading-normal text-center">
          Guide by Experts
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[9px] md:text-[14px] lg:text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
              
            </div>

            <div className='w-[150px] h-[250px] md:w-[250px] md:h-[300px]  lg:w-[395px] lg:h-[406px] flex flex-col gap-5 justify-center items-center rounded-[10px] border-[5px] border-[#00add8] bg-[#030B15] shadow-[0px_0px_10px_0px_rgba(0, 173, 216, 1)]'>
            <div className="relative w-[50px] lg:w-[100px] p-1 justify-center flex  items-center h-[50px] lg:h-[100px]">
            <img
              className=" bg-transparent w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={musicplay}
              alt="profile.png"
            />
            <img src={BlueSpot} alt='BlueSpot.png' className='absolute opacity-70'/>
          </div>
          <span className="flex w-[100px] md:w-[180px] lg:w-[231px] flex-col text-[#FFF] text-[12px] md:text-[20px] lg:text-[26px] font-normal leading-normal text-center">
          24/7 Live Support
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[9px] md:text-[14px] lg:text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
              
            </div>
        </div>

      </div>
    </div>
  )
}

export default OurFeatures