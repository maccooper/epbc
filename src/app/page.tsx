'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Banner from './Banner';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </main>
  );
}

