import React from 'react';
import Logo from '../../../Assets/Logo.png';
import youtube from '../../../Assets/youtube.png';
import twitter from '../../../Assets/twitter.png';
import facebook from '../../../Assets/facebook.png';
import call from '../../../Assets/call.png';
import clock from '../../../Assets/clock.png';
import sms from '../../../Assets/sms.png';

const Footer = () => {
  return (
    <div className='flex p-20 bg-[rgba(0,196,244,0.3)] h-[424px]'>
        <div className='flex w-[100%] justify-between'>
            <div className='flex flex-col gap-10 items-start'>
              <div className='flex items-center gap-4 ml-10'>
              <img src={Logo} alt='Logo.png' className='h-[30px] w-[30px]'/>
           <span className='text-[#FFFFFF]  text-[40px] font-Outfit font-semibold'>Coinary</span>
              </div>
              <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className='ml-10 flex gap-4'>
           <div className='w-[60px] h-[60px] flex  rounded-[60px] border border-[#FFF] bg-[#FFF] justify-center items-center'>
            <img src={facebook} alt='Facebook' className='w-[32px] h-[32px] rounded-full  ' />
            
            </div>

            <div className='w-[60px] h-[60px] flex rounded-[60px] border border-[#FFF] bg-[#FFF] justify-center items-center'>
            <img src={twitter} alt='twitter' className='w-[32px] h-[32px] rounded-full'/>
          </div>
            
            
          <div className='w-[60px] h-[60px] flex rounded-[60px] border border-[#FFF] bg-[#FFF] justify-center items-center '>
            <img src={youtube} alt='Youtube' className='w-[32px] h-[32px] rounded-full'/>
          </div>

          </div>
          
            </div>

            <div className='flex flex-col gap-7'>
                <div>
                    <span className='text-[#FFF] text-[30px] font-normal leading-[32px]'>Our Products</span>
                </div>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Crypto Earn</span>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Exchanges</span>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Defi Wallet</span>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Converter</span>

            </div>

            <div className='flex flex-col gap-7'>
                <div>
                    <span className='text-[#FFF] text-[30px] font-normal leading-[32px]'>Pages</span>
                </div>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>About Us</span>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Our App</span>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Careers</span>
                <span className='text-[#FFF] text-[18px] font-normal leading-normal hover:underline cursor-pointer'>Taken Safe</span>

            </div>


            <div className='flex flex-col gap-7'>
                <div>
                    <span className='text-[#FFF] text-[30px] font-normal leading-[32px]'>Contact</span>
                </div>

                <div className='flex gap-4'>
                    <img src={call} alt='call' />
                    <span className='text-[18px] font-normal leading-normal text-[#FFF] hover:underline cursor-pointer'>{`(205) 555-01000`}</span>
                </div>

                <div className='flex gap-4'>
                    <img src={clock} alt='clock' />
                    <span className='text-[18px] font-normal leading-normal text-[#FFF] hover:underline cursor-pointer'>{`Mon - Fri : 9 am- 11 pm`}</span>
                </div>

                <div className='flex gap-4'>
                    <img src={sms} alt='sms' />
                    <span className='text-[18px] font-normal leading-normal text-[#FFF] hover:underline cursor-pointer'>Email@Coinreal.com</span>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Footer;