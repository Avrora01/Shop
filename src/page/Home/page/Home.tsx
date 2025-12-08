import { useEffect, useState } from "react";
import type {
  CardType,
  HotelReviewType,
  HotelType,
  News,
} from "@/types/cardType";
import HeroSection from "../components/HeroSection";
import HotToursSection from "../components/HotToursSection";
import PopularHotelsSection from "../components/PopularHotelsSection";
import ContactFormSection from "../components/ContactFormSection";
import NewsSection from "../components/NewsSection";
import AboutSection from "../components/AboutSection";
import ReviewsSection from "../components/ReviewsSection";

const HomePage = () => {
  const [tourCards, setTourCards] = useState<CardType[]>([]);
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [reviews, setReviews] = useState<HotelReviewType[]>([]);
  const [newsData, setNewsData] = useState<News[]>([]);

  // Загрузка данных
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

  return (
    <>
      {/* Герой-секция */}
      <HeroSection />

      {/* Горящие туры */}
      <HotToursSection tourCards={tourCards} />

      {/* Популярные отели */}
      <PopularHotelsSection hotels={hotels} />

      {/* Первая форма контакта */}
      <ContactFormSection
        backgroundImage="https://media.holafly.com/sites/1/2023/11/things-to-do-in-dubai-1024x523.jpg"
        title1="НЕ ОПРЕДЕЛИЛИСЬ"
        title2="С ВЫБОРОМ?"
        description="Оставьте свой номер и наш специалист поможет вам с подбором тура"
      />

      {/* Отзывы */}
      <ReviewsSection reviews={reviews} />

      {/* Новости */}
      <NewsSection newsData={newsData} />

      {/* О нас */}
      <AboutSection />

      {/* Вторая форма контакта */}
      <ContactFormSection
        backgroundImage="https://images.hdqwalls.com/download/early-morning-mountains-scenery-8n-2560x1700.jpg"
        title1="МЫ ПОМОЖЕМ СОЗДАТЬ"
        title2="ВАШЕ ПУТЕШЕСТВИЕ"
        description="Оставьте свой номер и наш специалист поможет вам с подбором тура"
      />
    </>
  );
};

export default HomePage;
