// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import styles from './index.less';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';

export default () => {
  return (
    <Swiper
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide3 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide4 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide5 />
      </SwiperSlide>
    </Swiper>
  );
};
