import Breadcrumb from '@/components/Breadcrumb/index';
import styles from './index.less';
import QueueAnim from 'rc-queue-anim';

import userSvg from './icons/user.svg';
import phoneSvg from './icons/phone.svg';
import emailSvg from './icons/email.svg';
import addressSvg from './icons/address.svg';

export default function () {
  return (
    <div className="page-container">
      <Breadcrumb
        title="Contact"
        sub="You can contact us by the following ways"
      />

      <div className={styles.content}>
        <QueueAnim
          delay={300}
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [0, 0], translateY: [0, -50] },
          ]}
        >
          <div className={styles.row} key={1}>
            <i>
              <img src={userSvg} />
            </i>
            <div className={styles.label}>Contact:</div>Kylin
          </div>
          <div className={styles.row} key={2}>
            <i>
              <img src={phoneSvg} />
            </i>
            <div className={styles.label}>Tel:</div>+86 13510531963
          </div>
          <div className={styles.row} key={3}>
            <i>
              <img src={emailSvg} />
            </i>
            <div className={styles.label}> E-mail:</div>
            <a href="mailto:kylin@seigobusiness.com">kylin@seigobusiness.com</a>
          </div>
          <div className={styles.row} key={4}>
            <i>
              <img src={addressSvg} />
            </i>
            <div className={styles.label}>Add.:</div>M507,D Building ,Fu Xing
            Hua Yuan, Long Wei Rd ,Futian Distrrict, Shenzhen ,
            Guangdong,P.R.China
          </div>
        </QueueAnim>
      </div>
    </div>
  );
}
