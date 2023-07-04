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
    <div className="flex flex-col ">
      <div className="flex  justify-center p-2 lg:p-5 w-[100%] mt-20">
        <div className="flex flex-col self-center items-center w-[800px] lg:w-[1200px] flex-wrap">
          <span className="text-[#00C4FC] text-[12px] lg:text-[24px] not-italic font-normal leading-normal">
            Why Choose Us
          </span>
          <span className="lg:w-[722px] lg:text-[48px] text-center text-[18px] font-normal not-italic leading-normal text-[#FFFFFF]">
            Safe, guaranteed, and easy to use
          </span>
          <span  className= "flex-wrap  w-[340px] h-max lg:w-[1102px] lg:h-[65px] ml-5 lg:ml-0 text-[14px] lg:text-[18px] flex flex-col flex-shrink-0 text-[#CFCFCF] font-normal leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute mollit anim id est
            laborum.
          </span>
        </div>
      </div>

      <div className="lg:w-auto flex justify-between p-5 flex-wrap">
        <div className=" lg:w-[350px] lg:h-[405px] md:w-[170px] w-[135px] h-[350px] p-5 lg:p-10 flex flex-col gap-5  flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="lg:w-[100px] lg:h-[100px] h-[50px] w-[50px] justify-center flex items-center p-1  rounded-full border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={unlock}
              alt="Unlock.png"
            />
          </div>
          <span className="flex  lg:w-[231px] flex-col text-[#FFF] text-[15px] lg:text-[32px] font-normal leading-normal">
            Safe and secure
          </span>
          <span className="flex  lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] lg:text-[18px] text-[10px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>

        <div className=" lg:w-[350px] lg:h-[405px] md:w-[170px] w-[135px] h-[350px] p-5 lg:p-10 flex flex-col gap-5  flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="lg:w-[100px] lg:h-[100px] h-[50px] w-[50px] justify-center flex items-center p-1  rounded-full border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
                src={activity}
              alt="Unlock.png"
            />
          </div>
          <span className="flex  lg:w-[231px] flex-col text-[#FFF] text-[15px] lg:text-[32px] font-normal leading-normal">
            Good invesment
          </span>
          <span className="flex  lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] lg:text-[18px] text-[10px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>

        <div className=" lg:w-[350px] lg:h-[405px] md:w-[170px] w-[135px] h-[350px] p-5 lg:p-10 flex flex-col gap-5  flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="lg:w-[100px] lg:h-[100px] h-[50px] w-[50px] justify-center flex items-center p-1  rounded-full border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
                src={unlock}
              alt="Unlock.png"
            />
          </div>
          <span className="flex  lg:w-[231px] flex-col text-[#FFF] text-[15px] lg:text-[32px] font-normal leading-normal">
           Integrated app
          </span>
          <span className="flex  lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] lg:text-[18px] text-[10px] not-italic font-normal leading-[26px]">
           Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>

        <div className=" lg:w-[350px] lg:h-[405px] md:w-[170px] w-[135px] h-[350px] p-5 lg:p-10 flex flex-col gap-5  flex-shrink-0 rounded-[10px] border border-[#353535] bg-[#030B15]">
          <div className="lg:w-[100px] lg:h-[100px] h-[50px] w-[50px] justify-center flex items-center p-1  rounded-full border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
                src={bitcoinconvert}
              alt="Unlock.png"
            />
          </div>
          <span className="flex  lg:w-[231px] flex-col text-[#FFF] text-[15px] lg:text-[32px] font-normal leading-normal">
            Multi Curency Support
          </span>
          <span className="flex  lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] lg:text-[18px] text-[10px] not-italic font-normal leading-[26px]">
             Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
        </div>
      </div>



      <div className="flex justify-center p-5 w-[100%] mt-20">
        <div className="flex flex-col self-center items-center w-[1200px]">
        <span className="text-[#00C4FC] text-[12px] lg:text-[24px] not-italic font-normal leading-normal">
        Step by step guide
          </span>
          <span className="lg:w-[722px] lg:text-[48px] text-center text-[18px] font-normal not-italic leading-normal text-[#FFFFFF]">
          Easy Steps to Success
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

      <div className="lg:w-auto flex justify-center gap-5 p-5 flex-wrap ">
        <div style={{borderRight:'1px solid rgba(0, 196, 244, 0.5)', borderLeft:'1px solid rgba(0, 196, 244, 0.5)' }} className="justify-center items-center w-[190px] h-[300px] md:w-[220px] lg:w-[395px] lg:h-[495px] border-t-2 border-t-[#00C4FC] border-b-[#353535]  p-5 lg:p-10 flex flex-col gap-3 lg:gap-5  flex-shrink-0 rounded-[10px] bg-[#030B15]">
          <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] p-1 justify-center flex  items-centerrounded-full lg: rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={emptywallet}
              alt="Unlock.png"
            />
          </div>
          <span className="flex lg:w-[231px] flex-col text-[#FFF] text-[20px] lg:text-[26px] font-normal leading-normal text-center">
          Create Wallet
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[10px] lg:text-[18px] not-italic  text-center font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className="relative flex items-center justify-center text-[#FFF] gap-3 text-[15px] lg:text-[22px] w-[150px] h-[30px] lg:w-[207px] lg:h-[71px] rounded-[10px] flex-shrink-0 bg-[#00C4FC] ">
          <button>Learn More </button>
          <img className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px] mt-1 cursor-pointer flex-shrink-0" src={arrowright} alt="arrowright.png" />
         </div>
        </div>

        <div style={{borderRight:'1px solid rgba(0, 196, 244, 0.5)', borderLeft:'1px solid rgba(0, 196, 244, 0.5)' }} className="justify-center items-center w-[190px] h-[300px] md:w-[220px] lg:w-[395px] lg:h-[495px] border-t-2 border-t-[#00C4FC] border-b-[#353535]  p-5 lg:p-10 flex flex-col gap-3 lg:gap-5  flex-shrink-0 rounded-[10px] bg-[#030B15]">
           <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] p-1 justify-center flex items-center rounded-full lg:rounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={moneys}
              alt="Unlock.png"
            />
          </div>
          <span className="flex lg:w-[231px] flex-col text-[#FFF] text-[20px] lg:text-[32px] font-normal leading-normal text-center">
          Make Payment
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[10px]  lg:text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className="relative flex items-center justify-center text-[#FFF] gap-3 text-[15px] lg:text-[22px] w-[150px] h-[30px] lg:w-[207px] lg:h-[71px] rounded-[10px] flex-shrink-0 bg-[#00C4FC] ">
          <button>Learn More </button>
          <img className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px] mt-1 cursor-pointer flex-shrink-0" src={arrowright} alt="arrowright.png" />
          </div>
        </div>

        <div style={{borderRight:'1px solid rgba(0, 196, 244, 0.5)', borderLeft:'1px solid rgba(0, 196, 244, 0.5)' }} className="justify-center items-center w-[190px] h-[300px]  md:w-[220px] lg:w-[395px] lg:h-[495px] border-t-2 border-t-[#00C4FC] border-b-[#353535]  p-5 lg:p-10 flex flex-col gap-3 lg:gap-5  flex-shrink-0 rounded-[10px] bg-[#030B15]">
          <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] p-1 justify-center flex items-center rounded-full lg:ounded-[100px] border border-[#353535] bg-[rgba(95,95,95,0.2)]">
            <img
              className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] flex-shrink-0"
              src={shoppingCart}
              alt="Unlock.png"
            />
          </div>
          <span className="flex lg:w-[100%]  flex-col text-[#FFF] text-[20px] lg:text-[26px] font-normal leading-normal text-center">
          Buy and or sell
          </span>
          <span className="flex lg:w-[313px] lg:h-[105px] flex-col flex-shrink-0 text-[#7D7D7D] text-[10px] lg:text-[18px] not-italic font-normal leading-[26px]">
            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit
            anim id est laborum sad to veniam nostrud quis exercition laboris.
          </span>
          <div className="relative flex items-center justify-center text-[#FFF] gap-3 text-[15px] lg:text-[22px] w-[150px] h-[30px] lg:w-[207px] lg:h-[71px] rounded-[10px] flex-shrink-0 bg-[#00C4FC] ">
            <button>Learn More </button>
            <img className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px] mt-1 cursor-pointer flex-shrink-0" src={arrowright} alt="arrowright.png" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default ChooseUs;