import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
export default function () {
  return (
    <div>
      <Breadcrumb title="About us" />
      <h1 className={styles.title}>WELCOME TO SEIGO</h1>
      <p>
        SEIGO BUSINESS (HK)LIMTED, established in 2018, is a professional
        manufacturer and exporter that is concerned with the research,
        development and production of consumer electronics. we have been
        developing into an excellent supply chain and OEM/ODM partnership. We
        are located in Shenzhen, with convenient transportation access. Our main
        products include earphones, headphones, Bluetooth related products,
        wireless chargers and other smart phone accessories, All of our products
        comply with international quality standards and are greatly popular in a
        variety of different markets throughout the world. Our customers are
        importers, supermarket, chain stores.
      </p>
      <p>
        As a result of competitive prices and outstanding customer service, we
        have gained a good reputation ,we sincerely looking forward to building
        mutual business relationship with more customers , for more details ,
        please contact us now.
      </p>
    </div>
  );
}
