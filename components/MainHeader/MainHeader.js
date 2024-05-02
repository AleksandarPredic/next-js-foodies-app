import Link from "next/link";
import styles from './MainHeader.module.css';

import logoImg from '@/assets/logo.png';
import Image from "next/image";

export default function MainHeader() {
  return (
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
          <li><Link href="/meals">Browse meals</Link></li>
          <li><Link href="/community">Foodies Community</Link></li>
          <li><Link href="/meals/share">Share Meals</Link></li>
        </ul>
      </nav>
    </header>
  );
}