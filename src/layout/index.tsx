import { ReactNode, useEffect } from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import styles from './index.less';
import { useLocation } from 'umi';

interface IProp {
  children: ReactNode;
}
export default function IndexPage({ children }: IProp) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className={styles.html}>
      <Header></Header>
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
