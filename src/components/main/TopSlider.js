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
    arrows: true,
    variableWidth: true,
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          left: '20px',
          zIndex: '1',
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          right: '20px',
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Slider
          prevArrow={<SamplePrevArrow />}
          nextArrow={<SampleNextArrow />}
          className={styles.slider}
          {...settings}
        >
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
