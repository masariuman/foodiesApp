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
            <h1>Gorengan Enak Untuk Yang Suka Makan</h1>
            <p>Rasakan dan Bagikan Semua Gorengan Ke Seluruh Dunia.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Ayo Bergabung !</Link>
            <Link href="/meals">Cari Gorengan</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Apa itu GorengGorengan ?</h2>
          <p>
            MakanaGorengGorengannEnak adalah tempat untuk para pecinta gorengan membagikan resep gorengan favorit mereka ke seluruh dunia. Tempat ini digunakan untuk menemukan gorengan baru, dan menghubungkan ke sesama pecinta gorengan.
          </p>
          <p>
            gorengan GorengGorengan adalah tempat untuk berbagi sesama pecinta gorengan enak dari seluruh dunia.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Mengapa GorengGorengan?</h2>
          <p>
            Dengan GorengGorengan ini dibuat dapat menyatukan para pecinta gorengan dari seluruh dunia agar saling berbagi dengan variasi resep sesuai selera para pecinta gorengan yang memiliki resep tersebut agar dicoba oleh orang yang ingin merasakan gorengan enak yang diberikan.
          </p>
          <p>
            GorengGorengan memudahkan mencari resep dari berbagai negara suku golongan dan apapun itu di seluruh dunia.
          </p>
        </section>
      </main>
    </>
  );
}