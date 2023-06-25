import Breadcrumb from '@/components/Breadcrumb';
import styles from './index.less';

import products from '@/lib/product';
import { useState } from 'react';
import Tabs from '@/components/Tabs';
import { Link } from 'umi';
import ProductList from '@/components/productList';
export default function () {
  const options = products.map(({ dir, id }) => ({ label: dir, value: id }));
  const defaultValue = products?.[0]?.id;
  const [currentId, setCurrentId] = useState(defaultValue);
  const currentProducts =
    products.find(({ id }) => id === currentId)?.products ?? [];
  return (
    <div className="page-container">
      <Breadcrumb title="Product" />
      <Tabs
        options={options}
        onChange={(v) => setCurrentId(v)}
        defaultValue={defaultValue}
      />
      <ProductList list={currentProducts} dirId={currentId} />
    </div>
  );
}
