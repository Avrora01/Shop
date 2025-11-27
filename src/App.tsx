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

// Импорты CSS
import "swiper/css";
import "swiper/css/scrollbar";

const App = () => {
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
            <h1 className="text-[24px] font-medium uppercase mb-2">горящие туры</h1>
            <p className="text-[#1C1C1C] uppercase font-light text-lg">Поймайте момент</p>
          </div>
          
          {/* Swiper с отступом слева 60% */}
          <div className="w-[80%] ml-auto">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              modules={[Scrollbar]}
              scrollbar={{ 
                draggable: true,
                hide: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20
                }
              }}
            >
              {/* Карточка 1 - ЭФА МОСКВА */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  {/* Верхняя часть с изображением */}
                  <div className="relative h-48 bg-gray-200">
                    <img src={a} alt="МОСКВА" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      -50%
                    </div>
                  </div>
                  
                  {/* Контент карточки */}
                  <div className="p-4">
                    {/* Заголовок ЭФА */}
                    <div className="text-xs text-gray-500 uppercase mb-1">ЭФА</div>
                    
                    {/* Основной заголовок */}
                    <h3 className="font-bold text-xl mb-2">МОСКВА</h3>
                    
                    {/* Цена и характеристики */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-gray-900">6x117</span>
                      <span className="text-gray-500 line-through text-sm">5 x</span>
                    </div>
                    
                    {/* Описание */}
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <p>Площа 2.0</p>
                      <p>Животная пальцами перед ногой</p>
                      <p>Часы топорище</p>
                    </div>
                    
                    {/* Цена и метка */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-600 font-bold text-lg">Бесплатно</span>
                      <span className="text-blue-600 text-sm">Street model</span>
                    </div>
                    
                    {/* Дополнительная информация */}
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>представлен</p>
                      <p>свой розетчик</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Карточка 2 - ЗВА САНКТ-ПЕТЕРБУРГ */}
              <SwiperSlide>
                <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="relative h-48 bg-gray-200">
                    <img src={b} alt="САНКТ-ПЕТЕРБУРГ" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      -30%
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-xs text-gray-500 uppercase mb-1">ЗВА</div>
                    
                    <h3 className="font-bold text-xl mb-2">САНКТ-ПЕТЕРБУРГ</h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-gray-900">5x89</span>
                      <span className="text-gray-500 line-through text-sm">4 x</span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <p>Комфорт класс</p>
                      <p>Все включено</p>
                      <p>Экскурсии</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold text-lg">25 000 ₽</span>
                      <span className="text-blue-600 text-sm">Выгодно</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Карточка 3 - СОЧИ */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="relative h-48 bg-gray-200">
                    <img src={c} alt="СОЧИ" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      -40%
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">СОЧИ</h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-gray-900">8x156</span>
                      <span className="text-gray-500 line-through text-sm">6 x</span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <p>Премиум стель</p>
                      <p>Бассейн и СПА</p>
                      <p>Питание включено</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold text-lg">35 000 ₽</span>
                      <span className="text-blue-600 text-sm">Хитровое</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Карточка 4 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="relative h-48 bg-gray-200">
                    <img src={d} alt="Тур 4" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      -25%
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">КАЗАНЬ</h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-gray-900">4x76</span>
                      <span className="text-gray-500 line-through text-sm">3 x</span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <p>Экскурсионный</p>
                      <p>Исторический центр</p>
                      <p>Групповой тур</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold text-lg">18 000 ₽</span>
                      <span className="text-blue-600 text-sm">Популярно</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Карточка 5 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="relative h-48 bg-gray-200">
                    <img src={e} alt="Тур 5" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      -60%
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">КРЫМ</h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-gray-900">7x134</span>
                      <span className="text-gray-500 line-through text-sm">5 x</span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <p>Море и горы</p>
                      <p>Все включено</p>
                      <p>Экскурсии</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold text-lg">28 000 ₽</span>
                      <span className="text-blue-600 text-sm">Спецпредложение</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;