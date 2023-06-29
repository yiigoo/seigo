// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import styles from './index.less';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import QueueAnim from 'rc-queue-anim';

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
                <QueueAnim
                  delay={300}
                  animConfig={[
                    { opacity: [1, 0], translateX: [1, -150] },
                    { opacity: [0, 0], translateX: [0, 150] },
                  ]}
                >
                  <h1 key={1}>WIRELESS HEADPONES</h1>
                  <ul key={2}>
                    <li>Bluetooth version: 5.1V</li>
                    <li key={3}>Transmission distance: 10m</li>
                    <li key={4}>Battery capacity: 200mAh</li>
                    <li key={5}>Charging time: up to 3hours</li>
                    <li key={6}>Play time: up to 3hours.</li>
                  </ul>
                  <div className={styles.slide1List} key={7}>
                    <img src="/r/banner/1/1.png" alt="" />
                  </div>
                </QueueAnim>
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
        <div className={`${styles.slide2} ${styles.slide1}`}>
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
                  <img src="/r/banner/2/1.png" alt="" />
                </div>
              </div>
              <div className={styles.slide1Right}>
                <img
                  className={styles.move}
                  src="/r/banner/2/2.png"
                  alt=""
                  width={350}
                  style={{ position: 'relative' }}
                />
                <br />
                <img
                  src="/r/banner/2/3.png"
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
        <div className={styles.slide3}>
          <div className="page-container">
            <div className={styles.content}>
              <div>
                <img
                  src="/r/banner/3/1.png"
                  alt=""
                  width={500}
                  style={{ marginTop: 20 }}
                />
                <br />
                <img
                  src="/r/banner/3/2.png"
                  alt=""
                  width={180}
                  style={{ marginTop: 50, marginLeft: 30 }}
                />
              </div>
              <div>
                <img
                  src="/r/banner/3/3.png"
                  alt=""
                  width={450}
                  style={{ marginTop: -40 }}
                  className={styles.move}
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide4}>
          <div className="page-container">
            <div className={styles.content}>
              <div>
                <img
                  src="/r/banner/4/3.png"
                  alt=""
                  width={150}
                  style={{ marginTop: -20, marginLeft: -60 }}
                />
                <br />
                <div className={styles.slide4Left}>
                  <img
                    src="/r/banner/4/1.png"
                    alt=""
                    width={320}
                    style={{ marginTop: 40 }}
                  />
                  <h2>
                    True Wireless
                    <br />
                    Stereo Earbuds
                  </h2>
                </div>
              </div>
              <div className={styles.slide4Right}>
                <h2>
                  In Ear Design
                  <br />
                  Surround Sound
                  <br />
                  Noiseless Clear Calls
                </h2>
                <img
                  src="/r/banner/4/2.png"
                  alt=""
                  width={500}
                  style={{ marginTop: -40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.slide5}`}>
          <div className="page-container">
            <div className={styles.content}>
              <div>
                <img
                  src="/r/banner/5/3.png"
                  alt=""
                  width={150}
                  style={{ marginTop: -20, marginLeft: -60 }}
                />
                <br />
                <div className={styles.slide5Left}>
                  <h2>
                    True Wireless
                    <br />
                    Stereo Earbuds
                  </h2>
                  <img src="/r/banner/5/1.png" alt="" width={400} />
                </div>
              </div>
              <div className={styles.slide5Right}>
                <img
                  src="/r/banner/5/2.png"
                  alt=""
                  width={500}
                  style={{ marginTop: -40 }}
                />
                <h2>
                  Noiseless Clear Calls
                  <br />
                  Surround Sound
                  <br />
                  In Ear Design
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
