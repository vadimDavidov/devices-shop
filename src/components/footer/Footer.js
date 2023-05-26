import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.logo}>Logo</span>
            <span className={styles.message}>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...{' '}
              <Link href={'#'}>Read More</Link>
            </span>
            <div className={styles.contacts}>
              <div className={styles.tel}>
                <Link href="tel:310-437-2766">
                  <Image
                    width={48}
                    height={48}
                    src={'/icons/tel.svg'}
                    alt="tel"
                  />
                </Link>
                <div className={styles.chunk}>
                  <p>Have a question?</p>
                  <Link href="tel:310-437-2766">310-437-2766</Link>
                </div>
              </div>
              <div className={styles.mail}>
                <Link href="mailto:unreal@outlook.com">
                  <Image
                    width={48}
                    height={48}
                    src={'/icons/mail.svg'}
                    alt="mail"
                  />
                </Link>
                <div className={styles.chunk}>
                  <p>Contact us at</p>
                  <Link href="mailto:unreal@outlook.com">
                    unreal@outlook.com
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.formLink}>
              <Link href={'feedback'}>Форма обратной связи</Link>
            </div>
          </div>

          <div className={styles.right}>
            <span>Newsletter</span>
            <span className={styles.newsMessage}>
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </span>
            <form className={styles.footerForm} action="POST">
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.footerNav}>
            <Link href={'#'}>О нас</Link>
            <Link href={'#'}>Условия покупки</Link>
            <Link href={'#'}>Как добавить свой товар?</Link>
            <Link href={'#'}>Пользовательские соглашения</Link>
          </div>
          <div className={styles.conclusion}>
            <span>© 2023, All Rights Reserved.</span>{' '}
            <span>Сайт разработан студией WebTeamStorm</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
