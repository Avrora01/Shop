// components/HeroSection.tsx
import bgImage from "../../../assets/image/wallpapers 2.png";

const HeroSection = () => {
  return (
    <div
      className="min-h-[800px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[95px] uppercase text-white font-roboto font-extrabold text-center leading-[95px] tracking-tight pt-24">
        ПУТЕШЕСТВИЯ
        <br />
        МЕЧТЫ
      </h1>
      <h1 className="text-[25px] uppercase text-white font-roboto text-center pt-16">
        выбери свою
      </h1>

      <div className="h-[50px] bg-white rounded-full w-[45%] m-auto mt-48 flex items-center justify-around">
        <div>
          <p className="text-[10px] text-[#A1A1A1]">Откуда</p>
          <h1 className="text-[12px] uppercase font-roboto font-bold">Москва</h1>
        </div>
        <div className="border-t-[30px] border border-[#D4D4D4]"></div>
        <h1 className="text-[12px] text-[#A1A1A1] uppercase">Куда</h1>
        <div className="border-t-[30px] border border-[#D4D4D4]"></div>
        <h1 className="text-[12px] text-[#A1A1A1] uppercase">вылет</h1>
        <div className="border-t-[30px] border border-[#D4D4D4]"></div>
        <div>
          <h1 className="text-[12px] text-[#A1A1A1]">На сколько</h1>
          <h1 className="text-[12px] font-roboto font-bold">9 - 12 ночей</h1>
        </div>
        <div className="border-t-[30px] border border-[#D4D4D4]"></div>
        <div>
          <h1 className="text-[12px] text-[#A1A1A1]">Туристы</h1>
          <h1 className="text-[12px] font-roboto font-bold">2 + 0</h1>
        </div>
        <button className="uppercase rounded-full hover:border border-[#6A6A6A] text-[12px] px-7 py-2 text-[white] bg-[#EC1C24] hover:bg-[white] hover:text-[#6A6A6A] transition">
          подобрать
        </button>
      </div>
    </div>
  );
};

export default HeroSection;