// components/HotToursSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import type { CardType } from "@/types/cardType";
import "swiper/css";
import "swiper/css/scrollbar";

interface HotToursSectionProps {
  tourCards: CardType[];
}

const HotToursSection = ({ tourCards }: HotToursSectionProps) => {
  return (
    <div className="min-h-[600px]">
      <div className="pt-[4%]">
        <h1 className="text-[34px] font-bold uppercase ml-[20%]">горящие туры</h1>
        <p className="text-[#1C1C1C] text-[14px] uppercase font-extralight text-lg ml-[20%]">
          Поймайте момент
        </p>
      </div>

      <div className="w-[80%] ml-auto mt-[3%]">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          modules={[Scrollbar]}
          scrollbar={{
            draggable: true,
            hide: false,
            snapOnRelease: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {tourCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[300px] w-full">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover absolute inset-0"
                />

                <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="border-[white] border rounded-full px-4">
                      <h1>{card.day}</h1>
                    </div>
                    <div className="border-[white] border rounded-full px-4">
                      <h1>oт {card.finalPrice}</h1>
                    </div>
                  </div>

                  <h1 className="mt-[40%]">{card.alt}</h1>
                  <div className="flex items-center justify-between">
                    <h1 className="text-[12px]">{card.tag}</h1>
                    <h1 className="text-[12px]">узнать больше</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HotToursSection;