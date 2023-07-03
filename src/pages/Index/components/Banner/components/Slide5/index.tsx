import styles from './index.less';

export default () => {
  return (
    <div className={`${styles.slide}`}>
      <div className="page-container">
        <div className={styles.content}>
          <div>
            <img src="/r/banner/5/3.png" className={`${styles.img}`} />
            <br />
            <div className={styles.left}>
              <h2>
                True Wireless
                <br />
                Stereo Earbuds
              </h2>
              <img src="/r/banner/5/1.png" />
            </div>
          </div>
          <div className={styles.right}>
            <img src="/r/banner/5/2.png" />
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
  );
};
