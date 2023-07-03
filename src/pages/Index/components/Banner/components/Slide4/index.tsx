import styles from './index.less';

export default () => {
  return (
    <div className={styles.slide}>
      <div className="page-container">
        <div className={styles.content}>
          <div>
            <img src="/r/banner/4/3.png" className={`${styles.img}`} />
            <br />
            <div className={styles.left}>
              <img src="/r/banner/4/1.png" />
              <h2>
                True Wireless
                <br />
                Stereo Earbuds
              </h2>
            </div>
          </div>
          <div className={styles.right}>
            <h2>
              In Ear Design
              <br />
              Surround Sound
              <br />
              Noiseless Clear Calls
            </h2>
            <img src="/r/banner/4/2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
