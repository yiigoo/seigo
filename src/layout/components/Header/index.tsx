import { Link, NavLink } from 'umi';
import styles from './index.less';
import { useLocation } from 'umi';

export default function IndexPage() {
  const location = useLocation();

  const routers = [
    {
      to: '/home',
      name: 'Home',
    },
    {
      to: '/about',
      name: 'About us',
    },
    {
      to: '/product',
      name: 'Product',
    },
    {
      to: '/contact',
      name: 'Contact',
    },
  ];
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Link to={'/home'}>
              <img
                src="/r/logo.png"
                alt=""
                height={58}
                className={styles.logoLarge}
              />
              <img
                src="/r/logo-small.png"
                alt=""
                height={24}
                className={styles.logoSmall}
              />
            </Link>
          </h1>
          <nav className={styles.nav}>
            <ul>
              {routers.map(({ to, name }) => (
                <li key={name}>
                  <NavLink to={to} activeClassName={styles.active}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.headerAction}></div>
    </>
  );
}
