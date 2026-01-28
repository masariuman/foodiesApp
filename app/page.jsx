import Link from 'next/link';

import ImageSlideshow from '@/layout/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Makanan Enak Untuk Yang Suka Makan</h1>
            <p>Rasakan dan Bagikan Semua Makanan Ke Seluruh Dunia.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Ayo Bergabung !</Link>
            <Link href="/meals">Cari Makanan</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Apa itu MakananEnak ?</h2>
          <p>
            MakananEnak adalah tempat untuk para pecinta makanan membagikan resep makanan favorit mereka ke seluruh dunia. Tempat ini digunakan untuk menemukan makanan baru, dan menghubungkan ke sesama pecinta makanan.
          </p>
          <p>
            Makanan MakananEnak adalah tempat untuk berbagi sesama pecinta makanan enak dari seluruh dunia.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Mengapa MakananEnak?</h2>
          <p>
            Dengan MakananEnak ini dibuat dapat menyatukan para pecinta makanan dari seluruh dunia agar saling berbagi dengan variasi resep sesuai selera para pecinta makanan yang memiliki resep tersebut agar dicoba oleh orang yang ingin merasakan makanan enak yang diberikan.
          </p>
          <p>
            MakananEnak memudahkan mencari resep dari berbagai negara suku golongan dan apapun itu di seluruh dunia.
          </p>
        </section>
      </main>
    </>
  );
}