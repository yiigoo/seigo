import Breadcrumb from '@/components/Breadcrumb';
import styles from './index.less';
import { useParams } from 'umi';
import products from '@/lib/product';
import QueueAnim from 'rc-queue-anim';

export default function IndexPage() {
  const { path = '_' } = useParams();
  const [pid, productId] = path.split('_');
  const current = products.find(({ id }) => pid === id);
  const detail = current
    ? current?.products?.find(({ id }) => productId === id)
    : {};
  const { img = '', name = '', dir = '', specification = [] } = detail;
  return (
    <div className="page-container">
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={img} alt="" />
        </div>
        <div className={styles.right}>
          <div>
            <QueueAnim
              delay={100}
              animConfig={[
                { opacity: [1, 0], translateX: [0, 150] },
                { opacity: [0, 0], translateX: [0, -150] },
              ]}
            >
              <div className={styles.title} key={'title'}>
                {name}
              </div>
              <div className={styles.dir} key={'dir'}>
                {dir}
              </div>
            </QueueAnim>

            <QueueAnim
              delay={500}
              animConfig={[
                { opacity: [1, 0], translateX: [0, 150] },
                { opacity: [0, 0], translateX: [0, -150] },
              ]}
            >
              <div className={styles.spec} key={'spec'}>
                <h3>Specification</h3>
                <ul>
                  {specification.map((text: string) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </QueueAnim>
          </div>
        </div>
      </div>
    </div>
  );
}
