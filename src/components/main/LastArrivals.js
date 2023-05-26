import styles from './LastArrivals.module.css';
import { arrivalsData } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

function LastArrivals() {
  const arrivals = arrivalsData.map(arrivals => arrivals);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Последние поступления</h2>
        <section className={styles.arrivals}>
          {arrivals.map(arrivals => {
            return (
              <div className={styles.arrival} key={arrivals.id}>
                <div className={styles.arrivalImage}>
                  <Image
                    width={222}
                    height={157}
                    src={arrivals.src}
                    alt="slide"
                  />
                </div>
                <span className={styles.stamp}>
                  <p>{arrivals.model}</p>
                  <p>{arrivals.number}</p>
                </span>
                <span className={styles.subHeader}>
                  <h3>{arrivals.header}</h3>
                </span>
                <div className={styles.description}>{arrivals.description}</div>

                <span className={styles.price}>{arrivals.price}</span>

                <form className={styles.form} action="POST">
                  <input type="number" defaultValue={1} min={1} step={1} />
                  <Link href="#">Перейти</Link>
                </form>
                <div className={styles.stock}>
                  <Image
                    width={16}
                    height={16}
                    src={'/icons/box.svg'}
                    alt="slide"
                  />
                  <span className={styles.amount}>{arrivals.stock}</span>
                </div>
              </div>
            );
          })}
        </section>
        <div className={styles.seeAll}>
          <Link href="#">Показать все</Link>
        </div>
      </div>
    </div>
  );
}

export default LastArrivals;
