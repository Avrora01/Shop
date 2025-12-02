import { LocationEditIcon, Menu, Phone } from "lucide-react";
import logo from "./assets/image/logo (1) 1.png";
import bgImage from "./assets/image/wallpapers 2.png";
import w from "./assets/image/Mask group.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Импорты CSS
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import type { CardType, HotelType, HotelReviewType } from "./types/cardType";
import { Swiper as SwiperType } from "swiper";

const App = () => {
  const [tourCards, setTourCards] = useState<CardType[]>([]);
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [reviews, setReviews] = useState<HotelReviewType[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/tourCards")
      .then((res) => res.json())
      .then((data) => setTourCards(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/hotelReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.hotelReviews || data));
  }, []);

  useEffect(() => {
    if (hotels.length > 0 && swiperRef.current) {
      const middleIndex = Math.floor(hotels.length / 2);
      swiperRef.current.slideTo(middleIndex);
    }
  }, [hotels]);

  // Массив цветов для фона карточек отзывов


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
      </div>

      <div className="min-h-[600px]">
        <div className="pt-[4%]">
          <h1 className="text-[34px] font-bold uppercase ml-[20%]">
            горящие туры
          </h1>
          <p className="text-[#1C1C1C] text-[14px] uppercase font-extralight text-lg ml-[20%]">
            Поймайте момент
          </p>
        </div>

        {/* Swiper с правильной настройкой ширины */}
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
      </div>

      <div className="overflow-hidden min-h-[800px] bg-[#F8F8F8]">
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

      <div
        className="min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${w})` }}
      >
        <div className="pt-[18%]"></div>
        <div className="bg-white min-h-[150px] w-[70%] m-auto rounded-2xl"></div>
      </div>

      {/* СЕКЦИЯ: Отзывы путешественников */}
      <div className="min-h-[600px]">
        
        <div className="pt-[3%]">
          <h1 className="text-[34px] font-bold uppercase text-center">
            ОТЗЫВЫ
          </h1>
          <h2 className="text-center text-[14px] text-gray-500 uppercase mb-10">
            ВПЕЧАТЛЕНИЯ НАШИХ ПУТЕШЕСТВЕННИКОВ
          </h2>
        </div>

        {/* Swiper для отзывов */}
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
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                {/* Карточка отзыва с цветным фоном */}
                <div
                  className={`relative rounded-lg bg-[#F8F8F8] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[350px] w-full`}
                >
                  {/* Верхняя часть с информацией о пользователе */}
                  <div className="p-6">
                    {/* Аватар пользователя */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-[18px] font-bold text-gray-800 uppercase">
                          {review.userName}
                        </h1>
                        <p className="text-[12px] text-gray-600">
                          Отдыхал в отеле {review.hotelId}
                        </p>
                        <p className="text-[11px] text-gray-500">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Разделитель */}
                    <div className="border-t border-gray-300 my-3"></div>

                    {/* Звезды рейтинга */}
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Заголовок отзыва */}
                    <h3 className="text-[16px] font-semibold text-gray-800 text-center mb-3">
                      {review.rating === 5
                        ? "Невероятное путешествие!"
                        : review.rating === 4
                        ? "Отличный отдых!"
                        : "Хороший отель"}
                    </h3>

                    {/* Текст отзыва */}
                    <div className="h-[120px] overflow-hidden">
                      <p className="text-[14px] text-gray-700 leading-relaxed italic">
                        "
                        {review.comment.length > 150
                          ? review.comment.substring(0, 150) + "..."
                          : review.comment}
                        "
                      </p>
                    </div>
                  </div>

                  {/* Нижняя часть с кнопкой и лайками */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
                    <div className="flex items-center justify-between">
                      {/* Лайки и дизлайки */}
                      <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-green-600 text-lg">👍</span>
                          <span className="text-[12px] text-gray-600">
                            {review.likes}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-red-600 text-lg">👎</span>
                          <span className="text-[12px] text-gray-600">
                            {review.dislikes}
                          </span>
                        </div>
                      </div>

                      {/* Кнопка */}
                      <button className="text-[12px] bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 hover:border-gray-400 transition text-gray-700">
                        читать полностью
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default App;
