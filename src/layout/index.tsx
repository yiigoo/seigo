import { ReactNode } from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import styles from './index.less';

interface IProp {
  children: ReactNode;
}
export default function IndexPage({ children }: IProp) {
  return (
    <div className={styles.body}>
      <Header></Header>
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
