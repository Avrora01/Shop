import bgImage from "../assets/image/wallpapers 2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Импорты CSS
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import type {
  CardType,
  HotelReviewType,
  HotelType,
  News,
} from "@/types/cardType";

const HomePage = () => {
  const [tourCards, setTourCards] = useState<CardType[]>([]);
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [reviews, setReviews] = useState<HotelReviewType[]>([]);
  const [newsData, setNewsData] = useState<News[]>([]);
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
    fetch("http://localhost:3001/news")
      .then((res) => res.json())
      .then((data) => setNewsData(data.newsData || data));
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

      <div
        className="min-h-[500px] bg-cover bg-center bg-no-repeat relative flex items-end pb-12 px-4"
        style={{
          backgroundImage: `url(https://media.holafly.com/sites/1/2023/11/things-to-do-in-dubai-1024x523.jpg)`,
        }}
      >
        {/* Белая карточка */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            {/* Левая часть - заголовок */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
                НЕ ОПРЕДЕЛИЛИСЬ
                <br />
                <span className="italic">С ВЫБОРОМ?</span>
              </h2>
            </div>

            {/* Средняя часть - текст */}
            <div className="flex-shrink-0">
              <p className="text-sm text-gray-600 leading-relaxed">
                Оставьте свой номер
                <br />
                и наш специалист поможет
                <br />
                вам с подбором тура
              </p>
            </div>

            {/* Правая часть - форма */}
            <div className="">
              <input
                type="text"
                placeholder="Имя"
                className="border-b-2 border-gray-300 focus:border-red-500 outline-none px-2 py-2 w-full sm:w-32 text-sm bg-transparent"
              />
              <br />
              <input
                type="tel"
                placeholder="Телефон"
                className="border-b-2 border-gray-300 focus:border-red-500 outline-none px-2 py-2 w-full sm:w-32 text-sm bg-transparent"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full uppercase text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-lg">
              ОТПРАВИТЬ
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* СЕКЦИЯ: Отзывы путешественников */}
      <div className="min-h-[700px]">
        <div className="pt-[5%]">
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
                  className={`relative rounded-lg bg-[#F8F8F8] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  h-[350px] `}
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
      {/* Секция Новостей */}
      <div className="min-h-[1100px] bg-[#F8F8F8]">
        <div className="pt-[4%]">
          <h1 className="text-[34px] font-bold uppercase ml-[15%]">новости</h1>
          <p className="text-[#1C1C1C] text-[14px] uppercase font-extralight text-lg ml-[15%]">
            события в мире туризма
          </p>
        </div>
        {/* Контейнер с процентной шириной */}
        <div className="px-4 md:px-10 lg:px-72 mt-[2%]">
          {/* Первая строка */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Карточка 1 - 40% */}
            <div className="w-full md:w-[50%] relative rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
              {/* Фоновая картинка */}
              <img
                src={newsData[0]?.img}
                alt={newsData[0]?.title}
                className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Темный оверлей для лучшей читаемости */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              {/* Заголовок поверх */}
              <div className="relative z-10 h-full w-[50%] flex items-center p-6">
                <h3 className="text-3xl font-semibold uppercase text-white">
                  {newsData[0]?.title}
                </h3>
              </div>
            </div>

            {/* Карточка 2 - 25% */}
            <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
              <img
                src={newsData[1]?.img}
                alt={newsData[1]?.title}
                className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <h3 className="text-lg font-bold uppercase text-white">
                  {newsData[1]?.title}
                </h3>
              </div>
            </div>

            {/* Карточка 3 - 25% */}
            <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
              <img
                src={newsData[2]?.img}
                alt={newsData[2]?.title}
                className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <h3 className="text-lg font-bold uppercase text-white">
                  {newsData[2]?.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Вторая строка */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Карточка 4 - 25% */}
            <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
              <img
                src={newsData[3]?.img}
                alt={newsData[3]?.title}
                className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <h3 className="text-lg font-bold uppercase text-white">
                  {newsData[3]?.title}
                </h3>
              </div>
            </div>

            {/* Карточка 5 - 60% */}
            <div className="w-full md:w-[50%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
              <img
                src={newsData[4]?.img}
                alt={newsData[4]?.title}
                className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 h-full w-[50%] flex items-center p-6">
                <h3 className="text-2xl font-bold uppercase text-white">
                  {newsData[4]?.title}
                </h3>
              </div>
            </div>

            {/* Карточка 6 - 25% */}
            <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
              <img
                src={newsData[5]?.img}
                alt={newsData[5]?.title}
                className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <h3 className=" font-bold uppercase text-white">
                  {newsData[5]?.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[900px] px-4 md:px-8 lg:px-16">
        <div className="pt-[1%]">
          <h1 className="text-[34px] font-bold uppercase text-center">О нас</h1>
          <h2 className="text-center text-[14px] text-gray-500 uppercase mb-10">
            Вдохновляем мир на путешествия
          </h2>
        </div>

        {/* Первая секция - Текст и изображение */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold">
              МЫ
              <span className="text-base font-normal ml-2">
                — команда профессионалов, влюблённых в искусство путешествий
              </span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Наша история началась с мечты о том, чтобы сделать каждое
              путешествие незабываемым, каждое приключение уникальным.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Наша миссия — сделать путешествия доступными и незабываемыми. Мы
              предлагаем вам не просто туры, а волшебные истории, которые будут
              жить в вашем сердце навсегда. Независимо от того, ищете ли вы
              релакс на пляже, культурные изыски или экстремальные приключения,
              мы создадим для вас оптимальное путешествие, подстроенное под ваши
              уникальные желания.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
              alt="Travel professional"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Вторая секция - Изображение и текст */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex items-center justify-center order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop"
              alt="Tropical destination"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
          <div className=" justify-center order-1 lg:order-2">
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы гордимся нашей командой опытных специалистов, каждый из которых
              разделяет страсть к туризму и стремление сделать ваше путешествие
              незабываемым. Мы внимательно следим за последними тенденциями в
              индустрии, чтобы предложить вам только лучшие и самые актуальные
              варианты.
            </p>
          </div>
          <div className=" justify-center order-1 lg:order-2">
            <p className="text-gray-700 leading-relaxed">
              Присоединяйтесь к нам в этом захватывающем путешествии! Мы готовы
              подарить вам моменты радости, вдохновения и удивления в каждом
              уголке нашего удивительного мира.
            </p>
          </div>
        </div>
      </div>

      <div
        className="min-h-[400px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4"
        style={{
          backgroundImage: `url('https://images.hdqwalls.com/download/early-morning-mountains-scenery-8n-2560x1700.jpg')`,
        }}
      >
        {/* Overlay для лучшей читаемости */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Контент карточка */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-6xl w-full flex items-center justify-between gap-8">
          {/* Левая часть - заголовок */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold uppercase mb-1">
              МЫ ПОМОЖЕМ СОЗДАТЬ
            </h2>
            <h2 className="text-2xl font-bold uppercase italic">
              ВАШЕ ПУТЕШЕСТВИЕ
            </h2>
          </div>

          {/* Средняя часть - текст */}
          <div className="flex-shrink-0">
            <p className="text-sm text-gray-600">
              Оставьте заявку
              <br />
              на подбор идеального
              <br />
              путешествия
            </p>
          </div>

          {/* Правая часть - форма */}
          <div className="">
            <input
              type="text"
              placeholder="Имя"
              className="border-b-2 border-gray-300 focus:border-red-500 outline-none px-2 py-2 w-32 text-sm"
            />
            <br />
            <input
              type="tel"
              placeholder="Телефон"
              className="border-b-2 border-gray-300 focus:border-red-500 outline-none px-2 py-2 w-32 text-sm"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full uppercase text-sm font-semibold flex items-center gap-2 transition-colors">
            ОТПРАВИТЬ
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
