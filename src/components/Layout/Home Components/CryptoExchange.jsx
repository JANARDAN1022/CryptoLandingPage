import React from 'react';
import CryptoCoins from '../../../Assets/CryptoCoins.png';

const CryptoExchange = () => {
  return (
    <div className='flex w-auto justify-center items-center p-5 '>
        <div className='w-[350px] h-[200px] md:w-[750px] md:h-[300px] lg:w-[1200px] lg:h-[400px] flex  p-5 lg:p-36 flex-shrink-0 rounded-[20px] bg-[rgba(0,196,244,0.3)] gap-10 '>
        <div className='flex self-center flex-col  lg:flex-1 gap-1 lg:gap-5'>
            <div className='flex flex-col'>
                <span className='lg:text-[24px] md:text-[16px] text-[10px] text-[#FFF] not-italic leading-normal font-normal'>Crypto Exchange</span>
                <span className='lg:text-[42px]  md:text-[25px] text-[12px] text-[#FFF] not-italic leading-normal font-normal'>Low fees and deep liquidity</span>
            </div>

            <span className='w-[180px]  lg:w-[678px] lg:h-[96px] flex-col flex-shrink-0  text-[9px] md:text-[14px]   lg:text-[22px]  font-normal leading-5 lg:leading-[32px] text-[#CFCFCF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</span>
            <button className='text-[10px] md:text-[14px] lg:text-[18px] w-[100px] h-[28px] md:w-[188px] md:h-[51px] lg:w-[228px] lg:h-[71px] flex-shrink-0 rounded-[10px] bg-[#00C4F4] text-[#FFF] justify-center items-center'>Go To Exchanges</button>
        </div>

        <div className='flex self-center w-[250px]  lg:flex-1'>
        <img src={CryptoCoins} alt='CrytoCoins.png'/>
        </div>

        </div>
    </div>
  )
}

export default CryptoExchange;