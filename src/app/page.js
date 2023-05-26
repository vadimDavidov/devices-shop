'use client';
import styles from './page.module.css';
import NavBar from '@/components/navbar/NavBar';
import TopSlider from '@/components/main/TopSlider';
import Categories from '@/components/main/Categories';
import CentralSlider from '@/components/main/CentralSlider';
import Producers from '@/components/main/Producers';
import LastArrivals from '@/components/main/LastArrivals';
import Adds from '@/components/main/Adds';

export default function Home() {
  return (
    <main className={styles.main}>
      <title>Домашняя страница</title>
      <NavBar />
      <TopSlider />
      <Categories />
      <CentralSlider />
      <Producers />
      <LastArrivals />
      <Adds />
    </main>
  );
}
