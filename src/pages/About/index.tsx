import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb/index';
import pic from './pic.png';
export default function () {
  return (
    <div className="page-container">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <QueueAnim
            delay={500}
            animConfig={[
              { opacity: [1, 0], translateX: [0, -100] },
              { opacity: [0, 0], translateX: [0, 100] },
            ]}
          >
            <img src={pic} alt="" className={styles.img} key={1} />
          </QueueAnim>
        </div>
        <div className={styles.content}>
          <QueueAnim>
            <h1 className={styles.title} key={1}>
              About us
            </h1>
            <div className={styles.sub} key={2}>
              WELCOME TO SEIGO
            </div>
            <p key={3}>
              SEIGO BUSINESS (HK)LIMTED, established in 2018, is a professional
              manufacturer and exporter that is concerned with the research,
              development and production of consumer electronics. we have been
              developing into an excellent supply chain and OEM/ODM partnership.
              We are located in Shenzhen, with convenient transportation access.
              Our main products include earphones, headphones, Bluetooth related
              products, wireless chargers and other smart phone accessories, All
              of our products comply with international quality standards and
              are greatly popular in a variety of different markets throughout
              the world. Our customers are importers, supermarket, chain stores.
            </p>
            <p key={4}>
              As a result of competitive prices and outstanding customer
              service, we have gained a good reputation ,we sincerely looking
              forward to building mutual business relationship with more
              customers , for more details , please contact us now.
            </p>
          </QueueAnim>
        </div>
      </div>
    </div>
  );
}
