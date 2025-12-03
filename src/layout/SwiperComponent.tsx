import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

interface SwiperComponentProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  slidesPerView?: number
  spaceBetween?: number
}

const SwiperComponent = <T,>({
  items,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 20,
}: SwiperComponentProps<T>) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
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
          slidesPerView,
          spaceBetween,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {renderItem(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent