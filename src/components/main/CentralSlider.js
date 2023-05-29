import styles from './CentralSlider.module.css';
import { popularData } from '@/utils/data';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

function CentralSlider() {
  const slides = popularData.map(slide => slide);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.header}>
          <h2>Популярные товары</h2>
        </span>
        <Slider className={styles.slider} {...settings} key={slides.id}>
          {slides.map(slides => {
            return (
              <div className={styles.slide} key={slides.id}>
                <div className={styles.slideImage}>
                  <Image
                    width={222}
                    height={157}
                    src={slides.src}
                    alt="slide"
                    priority={true}
                  />
                </div>
                <span className={styles.stamp}>
                  <p>{slides.model}</p>
                  <p>{slides.number}</p>
                </span>
                <span className={styles.subHeader}>
                  <h3>{slides.header}</h3>
                </span>
                <div className={styles.description}>{slides.description}</div>
                <div className={styles.prices}>
                  <span>{slides.price}</span>
                  <span>{slides.oldPrice}</span>
                </div>
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
                  <span className={styles.amount}>{slides.stock}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default CentralSlider;
