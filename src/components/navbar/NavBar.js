import styles from './NavBar.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.nav}>
          <span className={styles.logo}>Logo</span>

          <input type="text" placeholder="Поиск" />
          <div className={styles.buttonsGroup}>
            <Link className={styles.regBtn} href={'#'}>
              Регистрация
            </Link>
            <Link className={styles.enterBtn} href={'#'}>
              Войти
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.line}></div>
    </>
  );
}

export default NavBar;
