import styles from './Categories.module.css';
import Image from 'next/image';
import { categoriesData } from '@/utils/data';

function Categories() {
  const categories = categoriesData.map(category => category);
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Категории</h2>
        <div className={styles.inner}>
          {categories.map(category => (
            <div className={styles.categories} key={category.id}>
              <div className={styles.category} key={category.id}>
                <Image
                  width={204}
                  height={215}
                  src={category.src}
                  alt="category"
                />
                <label htmlFor="">{category.label}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
