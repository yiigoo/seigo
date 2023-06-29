import styles from './index.less';
import QueueAnim from 'rc-queue-anim';

export default () => {
  return (
    <div className={styles.slide}>
      <div className="page-container">
        <div className={styles.content}>
          <div className={styles.left}>
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
              <div className={styles.list} key={7}>
                <img src="/r/banner/1/1.png" alt="" />
              </div>
            </QueueAnim>
          </div>
          <div className={styles.right}>
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
  );
};
