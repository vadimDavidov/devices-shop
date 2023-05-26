import styles from './Adds.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { adds } from '@/utils/data';

function Adds() {
  const addsList = adds.map(adds => adds);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {addsList.map(add => (
          <section className={styles.adds} key={add.id}>
            <div className={styles.addBox}>
              <div className={styles.add}>
                <Image
                  width={add.width}
                  height={add.height}
                  src={add.src}
                  alt="add"
                />
                <div className={styles.linkGroup}>
                  <span>Подробнее</span>
                  <Link href="#">
                    <Image
                      width={36}
                      height={36}
                      src={'/icons/action-btn.svg'}
                      alt="action"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Adds;
