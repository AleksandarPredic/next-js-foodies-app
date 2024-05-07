import Link from "next/link";
import styles from './MainHeader.module.css';

import logoImg from '@/assets/logo.png';
import Image from "next/image";
import MainHeaderBackground from "@/components/MainHeader/MainHeaderBackground/MainHeaderBackground";
import NavLink from "@/components/NavLink/NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src={logoImg}
            alt="A plate with food on it"
            width={80}
            height={80}
            priority={true}
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul style={{color: 'white'}}>
            <li>
              <NavLink href={'/meals'}>Browse meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}