import { useEffect, useState } from 'react'
import type { CardType } from '../types/cardType'
import SwiperComponent from '@/layout/SwiperComponent'
const ToursPage = () => {
  const [tourCards, setTourCards] = useState<CardType[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/tourCards")
      .then((res) => res.json())
      .then((data) => setTourCards(data))
  }, [])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-[42px] font-bold uppercase text-center mb-4">
          Горящие туры
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Самые выгодные предложения для вашего путешествия
        </p>
        
        <SwiperComponent
          items={tourCards}
          renderItem={(card) => (
            <div className="relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[350px] w-full">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                    <h1 className="text-sm">{card.day}</h1>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                    <h1 className="text-sm">oт {card.finalPrice}</h1>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-2">{card.alt}</h1>
                <p className="text-sm mb-4">{card.tag}</p>
                <div className="flex items-center justify-between">
                  <button className="bg-[#EC1C24] hover:bg-red-600 px-6 py-2 rounded-full text-sm transition">
                    Забронировать
                  </button>
                  <button className="text-sm hover:underline">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          )}
        />

        {/* Все туры в сетке */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Все туры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourCards.map((card) => (
              <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={card.image} 
                  alt={card.alt} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{card.alt}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600">{card.day}</span>
                    <span className="text-lg font-bold text-[#EC1C24]">{card.finalPrice}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{card.tag}</p>
                  <button className="w-full bg-[#EC1C24] hover:bg-red-600 text-white py-2 rounded-lg transition">
                    Выбрать тур
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToursPage