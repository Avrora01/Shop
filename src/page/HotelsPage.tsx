import { useEffect, useState } from 'react'
import type { CardType } from '../types/cardType'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import bgImage from '../assets/image/wallpapers 2.png'

const HomePage = () => {
  const [tourCards, setTourCards] = useState<CardType[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/tourCards")
      .then((res) => res.json())
      .then((data) => setTourCards(data))
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-[800px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
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
            <h1 className="text-[12px] uppercase font-roboto font-bold">
              Москва
            </h1>
          </div>
          <div className="border-t-[30px] border border-[#D4D4D4]"></div>
          <h1 className="text-[12px] text-[#A1A1A1] uppercase">Куда</h1>
          <div className="border-t-[30px] border border-[#D4D4D4]"></div>
          <h1 className="text-[12px] text-[#A1A1A1] uppercase">вылет</h1>
          <div className="border-t-[30px] border border-[#D4D4D4]"></div>
          <div>
            <h1 className="text-[12px] text-[#A1A1A1]">На сколько</h1>
            <h1 className="text-[12px] font-roboto font-bold">
              9 - 12 ночей
            </h1>
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

      {/* Первый свайпер - Горящие туры */}
      <div className="min-h-[600px] py-16">
        <div className="pt-[4%]">
          <h1 className="text-[34px] font-bold uppercase ml-[20%]">
            горящие туры
          </h1>
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
    </>
  )
}

export default HomePage