// components/ReviewsSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import type { HotelReviewType } from "@/types/cardType";
import "swiper/css";
import "swiper/css/scrollbar";

interface ReviewsSectionProps {
  reviews: HotelReviewType[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <div className="min-h-[700px]">
      <div className="pt-[5%]">
        <h1 className="text-[34px] font-bold uppercase text-center">ОТЗЫВЫ</h1>
        <h2 className="text-center text-[14px] text-gray-500 uppercase mb-10">
          ВПЕЧАТЛЕНИЯ НАШИХ ПУТЕШЕСТВЕННИКОВ
        </h2>
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
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative rounded-lg bg-[#F8F8F8] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[350px]">
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
                      <p className="text-[11px] text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 my-3"></div>

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
  );
};

export default ReviewsSection;