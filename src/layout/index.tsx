import { ReactNode, useEffect } from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import styles from './index.less';

interface IProp {
  children: ReactNode;
}
export default function IndexPage({ children }: IProp) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.html}>
      <Header></Header>
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
