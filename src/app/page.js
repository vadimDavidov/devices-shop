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

// * Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// * https://firebase.google.com/docs/web/setup#available-libraries

// * Your web app's Firebase configuration
// * For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBEqfDBsyV_A0YWSAAUmH44jvJMiTBsndg",
//   authDomain: "devices-shop.firebaseapp.com",
//   projectId: "devices-shop",
//   storageBucket: "devices-shop.appspot.com",
//   messagingSenderId: "346551305253",
//   appId: "1:346551305253:web:974c5ac7231e47e135abcc",
//   measurementId: "G-01FESBH628"
// };

// * Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
