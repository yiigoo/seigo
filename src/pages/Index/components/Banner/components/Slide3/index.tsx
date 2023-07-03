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
    <div className={styles.slide}>
      <div className="page-container">
        <div className={styles.content}>
          <div>
            <img src="/r/banner/3/1.png" className={styles.img1} />
            <br />
            <img src="/r/banner/3/2.png" alt="" className={styles.img2} />
          </div>
          <div>
            <img
              src="/r/banner/3/3.png"
              className={`$styles.move ${styles.img3}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
