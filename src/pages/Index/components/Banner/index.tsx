// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import styles from './index.less';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default () => {
  return (
    <Swiper
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <div className={styles.slide1}>
          <div className="page-container">
            <div className={styles.content}>
              <div className={styles.slide1Left}>
                <h1>WIRELESS HEADPONES</h1>
                <ul>
                  <li>Bluetooth version: 5.1V</li>
                  <li>Transmission distance: 10m</li>
                  <li>Battery capacity: 200mAh</li>
                  <li>Charging time: up to 3hours</li>
                  <li>Play time: up to 3hours.</li>
                </ul>
                <div className={styles.slide1List}>
                  <img src="/r/banner/1/1.png" alt="" />
                </div>
              </div>
              <div className={styles.slide1Right}>
                <img
                  className={styles.move}
                  src="/r/banner/1/2.png"
                  alt=""
                  width={350}
                  style={{ position: 'relative' }}
                />
                <br />
                <img
                  src="/r/banner/1/3.png"
                  alt=""
                  width={350}
                  style={{ marginTop: -120, marginLeft: -40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide2}>
          <div className={styles.content}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide3}>
          <div className={styles.content}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide4}>
          <div className={styles.content}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide5}>
          <div className={styles.content}></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
