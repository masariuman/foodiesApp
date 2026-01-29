import Link from "next/link";

import MainHeaderBackground from "./main-header-background";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A Plate With Food on it" priority />
          GorengGorengan
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className="">Cari Gorengan</Link>
            </li>
            <li>
              <Link href="/community">Komunitas</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}