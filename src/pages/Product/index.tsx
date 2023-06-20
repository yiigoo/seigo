import Breadcrumb from '@/components/Breadcrumb';
import styles from './index.less';

import products from '@/lib/product';
import { useState } from 'react';
import Tabs from '@/components/Tabs';
export default function IndexPage() {
  const options = products.map(({ dir, id }) => ({ label: dir, value: id }));
  const defaultValue = products?.[0]?.id;
  const [currentId, setCurrentId] = useState(defaultValue);
  const currentProducts =
    products.find(({ id }) => id === currentId)?.products ?? [];
  return (
    <div>
      <Breadcrumb title="Product" />
      <Tabs
        options={options}
        onChange={(v) => setCurrentId(v)}
        defaultValue={defaultValue}
      />
      <div className={styles.list}>
        {currentProducts.map(({ id, img, name }) => (
          <div className={styles.item} id={id}>
            <div className={styles.img}>
              <img src={img} alt="" width={200} />
            </div>
            <div className={styles.name}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
