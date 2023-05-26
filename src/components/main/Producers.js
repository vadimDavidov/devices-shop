import styles from './Producers.module.css';
import { producers } from '@/utils/data';
import Image from 'next/image';

function Producers() {
  const logos = producers.map(producers => producers);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Производители</h2>
      </div>
      <div className={styles.producers}>
        {logos.map(logo => (
          <div className={styles.producer} key={logo.id}>
            <Image width={200} height={70} src={logo.src} alt="producer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Producers;
