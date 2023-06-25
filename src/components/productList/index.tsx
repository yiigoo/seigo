import { useState } from 'react';
import styles from './index.less';
import { Link } from 'umi';
interface IProps {
  list: any[];
  dirId: string;
}
export default function ({ list = [], dirId }: IProps) {
  return (
    <div className={styles.list}>
      {list.map(({ id, img, name }) => (
        <Link to={`/product/${dirId}_${id}`} className={styles.item}>
          <div className={styles.item} id={id}>
            <div className={styles.img}>
              <img src={img} alt="" width={200} />
            </div>
            <div className={styles.name}>{name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
