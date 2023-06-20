import Breadcrumb from '@/components/Breadcrumb';
import styles from './index.less';
import { useParams } from 'umi';
import products from '@/lib/product';

export default function IndexPage() {
  const { id, productId } = useParams();
  const current = products.find(({ id: pid }) => pid === id);
  const detail = current
    ? current?.products?.find(({ id }) => productId === id)
    : {};
  const { img = '', name = '', dir = '', specification = [] } = detail;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{name}</div>
        <div className={styles.dir}>{dir}</div>
        <div className={styles.spec}>
          <h4>Specification</h4>
          <ul>
            {specification.map((text: string) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
