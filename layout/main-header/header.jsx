import Link from "next/link";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

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
              <NavLink href="/meals">Cari Gorengan</NavLink>
            </li>
            <li>
              <NavLink href="/community">Komunitas</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
