import type { FC } from "react";
interface CardType {
  title: string;
  button_text: string;
  flower_url: string;
}

const Card: FC<CardType> = ({ title, button_text, flower_url }) => {
  return (
    <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
      <div className=" pl-10">
        <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
          WELCOME TO MALAKA.BABM.UZ
        </h3>
        <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
          {title}
        </h1>
        <p className=" text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[15px]">
          ’Barkamol avlod’ respublika bolalari maktabi pedagog xodimlari va
          to’garak rahbarlari malakasini oshirish
        </p>
        <button className="bg-[#1677FF] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
          {button_text}
        </button>
      </div>
      <div className="relative flex justify-center items-center max-md:hidden">
        <img
          src="https://babm.uz/thogeeck/2022/07/logo-babm.png"
          alt="logo"
          className="w-[100%] h-[20%] pl-8"
        />
      </div>
    </div>
  );
};

export default Card;
