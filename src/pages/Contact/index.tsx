import Breadcrumb from '@/components/Breadcrumb';
import styles from './index.less';

export default function () {
  return (
    <div>
      <Breadcrumb title="Contact" />
      <h1 className={styles.title}>You can contact us by the following ways</h1>

      <div className={styles.row}>
        <div className={styles.label}>Contact:</div>Kylin
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Tel:</div>+86 13510531963
      </div>
      <div className={styles.row}>
        <div className={styles.label}> E-mail:</div>
        <a href="mailto:kylin@seigobusiness.com">kylin@seigobusiness.com</a>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Add.:</div>M507,D Building ,Fu Xing Hua
        Yuan, Long Wei Rd ,Futian Distrrict, Shenzhen , Guangdong,P.R.China
      </div>
    </div>
  );
}
