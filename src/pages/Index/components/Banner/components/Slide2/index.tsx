import styles from './index.less';

export default () => {
  return (
    <div className={`${styles.slide}`}>
      <div className="page-container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>WIRELESS HEADPONES</h1>
            <ul>
              <li>Bluetooth version: 5.1V</li>
              <li>Transmission distance: 10m</li>
              <li>Battery capacity: 200mAh</li>
              <li>Charging time: up to 3hours</li>
              <li>Play time: up to 3hours.</li>
            </ul>
            <div className={styles.list}>
              <img src="/r/banner/2/1.png" alt="" />
            </div>
          </div>
          <div className={styles.right}>
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
  );
};
