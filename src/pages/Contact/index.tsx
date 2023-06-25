import Breadcrumb from '@/components/Breadcrumb/index';
import styles from './index.less';

export default function () {
  return (
    <div className="page-container">
      <Breadcrumb
        title="Contact"
        sub="You can contact us by the following ways"
      />

      <div className={styles.content}>
        <div className={styles.row}>
          <i></i>
          <div className={styles.label}>Contact:</div>Kylin
        </div>
        <div className={styles.row}>
          <i></i>
          <div className={styles.label}>Tel:</div>+86 13510531963
        </div>
        <div className={styles.row}>
          <i></i>
          <div className={styles.label}> E-mail:</div>
          <a href="mailto:kylin@seigobusiness.com">kylin@seigobusiness.com</a>
        </div>
        <div className={styles.row}>
          <i></i>
          <div className={styles.label}>Add.:</div>M507,D Building ,Fu Xing Hua
          Yuan, Long Wei Rd ,Futian Distrrict, Shenzhen , Guangdong,P.R.China
        </div>
      </div>
    </div>
  );
}
