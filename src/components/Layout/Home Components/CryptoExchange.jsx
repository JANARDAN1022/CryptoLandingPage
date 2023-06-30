import React from 'react';
import CryptoCoins from '../../../Assets/CryptoCoins.png';

const CryptoExchange = () => {
  return (
    <div className='flex justify-center items-center p-5'>
        <div className='w-[1400px] h-[400px] flex p-36 flex-shrink-0 rounded-[20px] bg-[rgba(0,196,244,0.3)] gap-44'>
        <div className='flex self-center flex-col flex-1 gap-5'>
            <div className='flex flex-col'>
                <span className='text-[24px] text-[#FFF] not-italic leading-normal font-normal'>Crypto Exchange</span>
                <span className='text-[42px] text-[#FFF] not-italic leading-normal font-normal'>Low fees and deep liquidity</span>
            </div>

            <span className='w-[678px] h-[96px] flex-col flex-shrink-0 text-[22px] font-normal leading-[32px] text-[#CFCFCF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</span>
            <button className='w-[228px] h-[71px] flex-shrink-0 rounded-[10px] bg-[#00C4F4] text-[#FFF] justify-center items-center'>Go To Exchanges</button>
        </div>

        <div className='flex self-center flex-1'>
        <img src={CryptoCoins} alt='CrytoCoins.png' />
        </div>

        </div>
    </div>
  )
}

export default CryptoExchange;