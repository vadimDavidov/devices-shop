import styles from './Feedback.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Feedback() {
  return (
    <div className={styles.container}>
      <div className={styles.linkGroup}>
        <Link href="/">
          <Image
            width={14}
            height={14}
            src={'/icons/arrow-back.svg'}
            alt="arrow"
          />
          <span>Назад</span>
        </Link>
      </div>
      <h1>Свяжитесь с нами, если возникли какие-либо трудности</h1>
      <form className={styles.form} action="POST">
        <div className={styles.left}>
          <label htmlFor="fio">Введите ФИО*</label>
          <input name="fio" type="text" />
          <label htmlFor="phone">Телефон*</label>
          <input name="phone" type="tel" />
          <label htmlFor="email">Email*</label>
          <input name="email" type="email" />
          <button type="submit">Отправить</button>
        </div>
        <div className={styles.right}>
          <label htmlFor="text">Опишите проблему</label>
          <textarea name="text" cols="30" rows="20" />
        </div>
      </form>
    </div>
  );
}

export default Feedback;
