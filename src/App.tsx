import { LocationEditIcon, Menu, Phone } from "lucide-react";
import logo from "./assets/image/logo (1) 1.png";
import bgImage from "./assets/image/wallpapers 2.png";
import a from "./assets/image/1 (1).jpg";
import b from "./assets/image/1 (1).png";
import c from "./assets/image/1 (2).jpg";
import d from "./assets/image/1 (3).jpg";
import e from "./assets/image/1 (5).jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Импорты CSS
import "swiper/css";
import "swiper/css/scrollbar";

const App = () => {
  // Массив данных для карточек
  const tourCards = [
    {
      id: 1,
      image: a,
      alt: "МОСКВА",
      day: "10 дней",
      finalPrice: "35 000₽",
      tag: "10 до 20 ноября",
    },
    {
      id: 2,
      image: b,
      alt: "САНКТ-ПЕТЕРБУРГ",
      day: "15 дней",
      finalPrice: "25 000 ₽",
      tag: "12 до 16 марта",
    },
    {
      id: 3,
      image: c,
      alt: "СОЧИ",
      day: "15 дней",
      finalPrice: "35 000 ₽",
      tag: "5 до 11 февраля",
    },
    {
      id: 4,
      image: d,
      alt: "КАЗАНЬ",
      day: "15 дней",
      finalPrice: "18 000 ₽",
      tag: "16 до 22 ноября",
    },
    {
      id: 5,
      image: e,
      alt: "КРЫМ",
      day: "7 дней",
      finalPrice: "28 000 ₽",
      tag: "21 до 28 ноября",
    },
  ];

  return (
    <>
      <div className="">
        <div className="part1">
          <div className="flex justify-around items-center py-4">
            <img src={logo} alt="" />
            <div className="flex gap-8 items-center">
              <h1 className="uppercase text-[14px] cursor-pointer hover:text-[#EC1C24]">
                Подбор тура
              </h1>
              <h1 className="uppercase text-[14px] cursor-pointer hover:text-[#EC1C24]">
                Горящие туры
              </h1>
              <h1 className="uppercase text-[14px] cursor-pointer hover:text-[#EC1C24]">
                Страны
              </h1>
              <h1 className="uppercase text-[14px] cursor-pointer hover:text-[#EC1C24]">
                отели
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="uppercase rounded-full border border-[#6A6A6A] text-[12px] px-4 py-2 hover:bg-[#EC1C24] hover:text-white transition">
                оставить заявку
              </button>
              <Phone
                size={20}
                className="text-[#000000] cursor-pointer hover:text-[#EC1C24]"
              />
              <LocationEditIcon
                size={20}
                className="text-[#000000] cursor-pointer hover:text-[#EC1C24]"
              />
              <Menu
                size={20}
                className="text-[#000000] cursor-pointer hover:text-[#EC1C24]"
              />
            </div>
          </div>

          <div
            className="min-h-[800px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <h1 className="text-[95px] uppercase text-white font-roboto font-extrabold text-center leading-[95px] tracking-tight pt-24">
              {" "}
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
        </div>

        {/* Секция горящих туров */}
        <div className="py-16 px-8">
          <div className="mb-12">
            <h1 className="text-[34px] font-bold uppercase mb-2 ml-[20%]">
              горящие туры
            </h1>
            <p className="text-[#1C1C1C] text-[14px] uppercase font-extralight text-lg ml-[20%]">
              Поймайте момент
            </p>
          </div>

          {/* Swiper с правильной настройкой ширины */}
          <div className="w-[80%] ml-auto">
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
                  {/* Компактная карточка с правильной шириной */}
                  <div className="relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[300px] w-full">
                    {/* Фоновое изображение */}
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover absolute inset-0"
                    />

                    {/* Темный оверлей для лучшей читаемости текста */}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                    {/* Контент поверх изображения - компактный */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                      {/* Категория (если есть) */}

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
          <div className="w-full py-20 overflow-hidden">
            <h1 className="text-[34px] font-bold uppercase mb-2 text-center">
              Популярные отели
            </h1>
            <p className="text-center text-[14px] text-gray-500 uppercase mb-10">
              Уют и роскошь в лучших отелях мира
            </p>

            <div className="mx-auto overflow-visible">
              <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                grabCursor={true}
                slidesPerView={"auto"}
                spaceBetween={100}
                initialSlide={Math.floor(tourCards.length / 2)} // ← Сразу средний!
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
                {tourCards.map((card) => (
                  <SwiperSlide
                    key={card.id}
                    className="w-[400px] h-[400px] rounded-2xl overflow-hidden relative"
                    style={{ borderRadius: "30px" }}
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute bottom-5 left-5 text-white">
                      <h1 className="text-[26px] font-semibold">{card.alt}</h1>
                      <p className="text-[14px]">{card.tag}</p>
                    </div>

                    <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-xl px-4 py-1 rounded-full">
                      <h1 className="text-black text-[18px] font-semibold">
                        {card.day}
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
