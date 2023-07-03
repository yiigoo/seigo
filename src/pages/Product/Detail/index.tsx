import styles from './index.less';
import { Link, useParams } from 'umi';
import products from '@/lib/product';
import QueueAnim from 'rc-queue-anim';
import arrowLeft from './arrowLeft.svg';

export default function IndexPage() {
  const { path = '_' }: any = useParams();
  const [pid, productId] = path.split('_');
  const current = products.find(({ id }) => pid === id);
  const detail = current
    ? current?.products?.find(({ id }) => productId === id)
    : {};
  const {
    img = '',
    name = '',
    dir = '',
    specification = [],
    white,
  }: any = detail;

  return (
    <div className="page-container">
      <div className={styles.page}>
        <Link className={styles.back} to={'/product'}>
          <img src={arrowLeft} alt="" width={20} />
          back
        </Link>
        <div className={styles.content}>
          <div
            className={styles.left}
            style={white ? { background: '#fff' } : {}}
          >
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
                <h3 key={'spec'}>Specification</h3>
              </QueueAnim>

              <div className={styles.spec} key={'spec'}>
                <ul>
                  <QueueAnim
                    delay={500}
                    animConfig={[
                      { opacity: [1, 0], translateY: [0, 50] },
                      { opacity: [0, 0], translateY: [0, -50] },
                    ]}
                  >
                    {specification.map((text: string) => (
                      <li key={text}>{text}</li>
                    ))}
                  </QueueAnim>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link className={styles.back} to={'/product'}>
          <img src={arrowLeft} alt="" width={20} />
          back
        </Link>
      </div>
    </div>
  );
}
