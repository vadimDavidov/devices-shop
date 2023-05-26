'use client';
import styles from './TopSlider.module.css';
import { topSliderData } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

function TopSlider() {
  const slides = topSliderData.map(slides => slides);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Slider className={styles.slider} {...settings}>
          {slides.map(slides => {
            return (
              <div className={styles.slides} key={slides.id}>
                <div className={styles.slides}>
                  <Image
                    priority={true}
                    width={1140}
                    height={475}
                    src={slides.src}
                    alt="slide"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
        <div className={styles.details}>
          <Link href="#">Подробнее</Link>
        </div>
      </div>
    </div>
  );
}

export default TopSlider;
