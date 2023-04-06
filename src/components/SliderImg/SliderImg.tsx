import { SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Pagination } from 'swiper'
import 'swiper/css'
import { FC } from 'react'
import { Image, SwiperCustom } from './style'

interface SliderImgProps {
  view: null | boolean
  update: (a: any) => void
}

const SliderImg: FC<SliderImgProps> = ({ view, update }) => {
  return (
    <SwiperCustom
      view={view}
      modules={[Pagination]}
      slidesPerView={'auto'}
      spaceBetween={15}
      initialSlide={1}
      onPaginationUpdate={(a) => update(a)}
      pagination={{ clickable: true }}
    >
      {[1, 2, 3, 4].map((el) => (
        <SwiperSlide key={el}>
          <Image view={view} src="https://source.unsplash.com/random"></Image>
        </SwiperSlide>
      ))}
    </SwiperCustom>
  )
}

export default SliderImg
