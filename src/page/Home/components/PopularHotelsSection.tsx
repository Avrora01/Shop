// components/PopularHotelsSection.tsx
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, EffectCoverflow } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import type { HotelType } from "@/types/cardType";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

interface PopularHotelsSectionProps {
  hotels: HotelType[];
}

const PopularHotelsSection = ({ hotels }: PopularHotelsSectionProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (hotels.length > 0 && swiperRef.current) {
      const middleIndex = Math.floor(hotels.length / 2);
      swiperRef.current.slideTo(middleIndex);
    }
  }, [hotels]);

  return (
    <div className="overflow-hidden min-h-[700px] bg-[#F8F8F8]">
      <div className="pt-[1%]">
        <h1 className="text-[34px] font-bold uppercase mb-2 text-center">
          Популярные отели
        </h1>
        <p className="text-center text-[14px] text-gray-500 uppercase mb-10">
          Уют и роскошь в лучших отелях мира
        </p>
      </div>

      <div className="mx-auto overflow-visible mt-[3%]">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={100}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (hotels.length > 0) {
              const middleIndex = Math.floor(hotels.length / 2);
              setTimeout(() => {
                swiper.slideTo(middleIndex);
              }, 100);
            }
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          scrollbar={{
            draggable: true,
          }}
          modules={[EffectCoverflow, Scrollbar]}
          className="overflow-visible"
        >
          {hotels.map((hotel) => (
            <SwiperSlide
              key={hotel.id}
              className="w-[400px] h-[400px] rounded-2xl overflow-hidden relative"
              style={{ borderRadius: "30px" }}
            >
              <img
                src={hotel.image}
                alt={hotel.alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <h1 className="text-[26px] font-semibold">{hotel.name}</h1>
                <p className="text-[14px]">{hotel.price}</p>
              </div>

              <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-xl px-4 py-1 rounded-full">
                <h1 className="text-black text-[18px] font-semibold">
                  {"★".repeat(hotel.stars)}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularHotelsSection;