import { useEffect, useState } from 'react'
import type { HotelReviewType } from '../types/cardType'
import SwiperComponent from '@/layout/SwiperComponent'

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<HotelReviewType[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/hotelReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.hotelReviews || data))
  }, [])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-[42px] font-bold uppercase text-center mb-4">
          ОТЗЫВЫ
        </h1>
        <h2 className="text-2xl font-medium uppercase text-center text-gray-600 mb-12">
          ВПЕЧАТЛЕНИЯ НАШИХ ПУТЕШЕСТВЕННИКОВ
        </h2>

        {/* Swiper для отзывов */}
        <div className="mb-16">
          <SwiperComponent
            items={reviews}
            renderItem={(review) => (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[400px] w-full">
                <div className="p-6 h-full flex flex-col">
                  {/* Верхняя часть с информацией о пользователе */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="text-[18px] font-bold text-gray-800">
                        {review.userName}
                      </h1>
                      <p className="text-[12px] text-gray-600">
                        Отель #{review.hotelId}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Разделитель */}
                  <div className="border-t border-gray-200 my-3"></div>

                  {/* Звезды рейтинга */}
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-2xl ${
                          i < review.rating ? "text-yellow-500" : "text-gray-300"
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
                  <div className="flex-grow overflow-hidden mb-4">
                    <p className="text-[14px] text-gray-700 leading-relaxed italic">
                      "{review.comment.length > 200 
                        ? review.comment.substring(0, 200) + '...' 
                        : review.comment}"
                    </p>
                  </div>

                  {/* Лайки и дизлайки */}
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 text-lg">👍</span>
                      <span className="text-[12px] text-gray-600">{review.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-red-600 text-lg">👎</span>
                      <span className="text-[12px] text-gray-600">{review.dislikes}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Все отзывы */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Все отзывы</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <img
                    src={review.userAvatar}
                    alt={review.userName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold">{review.userName}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < review.rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-600">👍 {review.likes}</span>
                      <span className="text-red-600">👎 {review.dislikes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsPage