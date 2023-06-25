import { Link, NavLink } from 'umi';
import styles from './index.less';
import { useLocation } from 'umi';

export default function IndexPage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Link to={'/home'}>
              <img src="/r/logo.png" alt="" height={48} />
            </Link>
          </h1>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to={'/home'} activeClassName={styles.active}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/about'} activeClassName={styles.active}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to={'/product'} activeClassName={styles.active}>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to={'/contact'} activeClassName={styles.active}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.headerAction}></div>
    </>
  );
}
