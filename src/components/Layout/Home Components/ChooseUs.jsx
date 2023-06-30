import React from "react";
import unlock from "../../../Assets/unlock.png";
import bitcoinconvert from "../../../Assets/bitcoin-convert.png";
import activity from "../../../Assets/activity.png";
import moneys from "../../../Assets/moneys.png";
import shoppingCart from "../../../Assets/shoppingcart.png";
import emptywallet from "../../../Assets/emptywallet.png";
import arrowright from '../../../Assets/arrowright.png';

const ChooseUs = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-5 w-[100%] mt-20">
        <div className="flex flex-col self-center items-center w-[1200px]">
          <span className="text-[#00C4FC]  text-[24px] not-italic font-normal leading-normal">
            Why Choose Us
          </span>
          <span className="w-[722px] text-[48px]  font-normal not-italic leading-normal text-[#FFFFFF]">
            Safe, guaranteed, and easy to use
          </span>
          <span  className="w-[1102px] h-[65px] flex flex-col flex-shrink-0 text-[#CFCFCF] text-[18px] font-normal leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute mollit anim id est
            laborum.
          </span>
        </div>
      </div>

      <div className="flex justify-between p-5 ">
        <div className="w-[350px]  p-10 flex flex-col gap-5 h-[405px] flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="w-[100px] justify-center flex items-center p-1 h-[100px] rounded-full border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={unlock}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[231px] flex-col text-[#FFF] text-[32px] font-normal leading-normal">
            Safe and secure
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>

        <div className="w-[350px]  p-10 flex flex-col gap-5 h-[405px] flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="w-[100px] p-1 justify-center flex  items-center h-[100px] rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={activity}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[231px] flex-col text-[#FFF] text-[26px] font-normal leading-normal">
            Good invesment
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>

        <div className="w-[350px]  p-10 flex flex-col gap-5 h-[405px] flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="w-[100px] p-1 justify-center flex items-center h-[100px] rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={unlock}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[231px] flex-col text-[#FFF] text-[32px] font-normal leading-normal">
            Integrated app
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>

        <div className="w-[350px]  p-10 flex flex-col h-[405px] gap-5 flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="w-[100px] p-1 justify-center flex items-center h-[100px] rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={bitcoinconvert}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[100%]  flex-col text-[#FFF] text-[26px] font-normal leading-normal">
            Multi Curency Support
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>
      </div>



      <div className="flex justify-center p-5 w-[100%] mt-20">
        <div className="flex flex-col self-center items-center w-[1200px]">
          <span className="text-[#00C4FC]  text-[24px] not-italic font-normal leading-normal">
          Step by step guide
          </span>
          <span className="w-[722px] text-[48px] text-center font-normal not-italic leading-normal text-[#FFFFFF]">
          Easy Steps to Success
          </span>
          <span className="w-[1102px] h-[65px] flex flex-col flex-shrink-0 text-[#CFCFCF] text-[18px] font-normal leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute mollit anim id est
            laborum.
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-5 p-5 ">
        <div style={{borderRight:'1px solid rgba(0, 196, 244, 0.5)', borderLeft:'1px solid rgba(0, 196, 244, 0.5)' }} className="justify-center items-center w-[395px] border-t-2 border-t-[#00C4FC] border-b-[#353535]   p-10 flex flex-col gap-5 h-[495px] flex-shrink-0 rounded-[10px] bg-[#030B15]">
          <div className="w-[100px] p-1 justify-center flex  items-center h-[100px] rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={emptywallet}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[231px] flex-col text-[#FFF] text-[26px] font-normal leading-normal text-center">
          Create Wallet
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className="relative flex items-center justify-center text-[#FFF] gap-3 text-[22px] w-[207px] h-[71px] rounded-[10px] flex-shrink-0 bg-[#00C4FC] ">
          <button>Learn More </button>
          <img className="w-[24px] h-[24px] mt-1 cursor-pointer flex-shrink-0" src={arrowright} alt="arrowright.png" />
          </div>
        </div>

        <div style={{borderRight:'1px solid rgba(0, 196, 244, 0.5)', borderLeft:'1px solid rgba(0, 196, 244, 0.5)' }} className="w-[395px] justify-center items-center p-10 flex flex-col gap-5 h-[495px] flex-shrink-0 rounded-[10px] border-b-2 border-b-[#00C4FC] border-t-[#353535]  bg-[#030B15]">
          <div className="w-[100px] p-1 justify-center flex items-center h-[100px] rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={moneys}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[231px] flex-col text-[#FFF] text-[32px] font-normal leading-normal text-center">
          Make Payment
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className="relative flex items-center justify-center text-[#FFF] gap-3 text-[22px] w-[207px] h-[71px] rounded-[10px] flex-shrink-0 bg-[#00C4FC] ">
          <button>Learn More </button>
          <img className="w-[24px] h-[24px] mt-1 cursor-pointer flex-shrink-0" src={arrowright} alt="arrowright.png" />
          </div>
        </div>

        <div style={{borderRight:'1px solid rgba(0, 196, 244, 0.5)', borderLeft:'1px solid rgba(0, 196, 244, 0.5)' }}  className="border-t-2 justify-center items-center border-t-[#00C4FC] border-b-[#353535]  w-[395px]  p-10 flex flex-col h-[495px] gap-5 flex-shrink-0 rounded-[10px] bg-[#030B15]">
          <div className="w-[100px] p-1 justify-center flex items-center h-[100px] rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[50px] h-[50px] flex-shrink-0"
              src={shoppingCart}
              alt="Unlock.png"
            />
          </div>
          <span className="flex w-[100%]  flex-col text-[#FFF] text-[26px] font-normal leading-normal text-center">
          Buy and or sell
          </span>
          <span className="flex w-[313px] h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className="relative flex items-center justify-center text-[#FFF] gap-3 text-[22px] w-[207px] h-[71px] rounded-[10px] flex-shrink-0 bg-[#00C4FC] ">
          <button>Learn More </button>
          <img className="w-[24px] h-[24px] mt-1 cursor-pointer flex-shrink-0" src={arrowright} alt="arrowright.png" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default ChooseUs;