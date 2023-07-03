import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
interface IProps {
  title: string;
  sub?: string;
}
export default function IndexPage({ title, sub }: IProps) {
  return (
    <div className={styles.container} style={sub ? {} : { minHeight: 140 }}>
      <QueueAnim
        animConfig={[
          { opacity: [1, 0], translateX: [0, 150] },
          { opacity: [0, 0], translateX: [0, -150] },
        ]}
      >
        <div key="title" className={styles.title}>
          {title}
        </div>
        {sub && (
          <div className={styles.sub} key="sub">
            {sub}
          </div>
        )}
      </QueueAnim>
    </div>
  );
}
