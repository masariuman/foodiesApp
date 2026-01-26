import Link from "next/link";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="A Plate With Food on it" />
        Makanan Enak
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Cari Makanan</Link>
          </li>
          <li>
            <Link href="/community">Komunitas</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}