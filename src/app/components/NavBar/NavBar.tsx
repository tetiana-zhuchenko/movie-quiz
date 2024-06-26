'use client'

import { usePathname } from 'next/navigation'
import styles from './NavBar.module.css'
import Link from 'next/link'
import BurgerSvg from '../BurgerSvg/BurgerSvg'
import BackArrow from '../BackArrow/BackArrow'

interface NavBarProps {
  thirty?: boolean
  sixty?: boolean
  full?: boolean
}

const NavBar = ({ thirty, sixty, full }: NavBarProps) => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.wrapper}>
          <Link
            className={styles.link}
            href={pathname === '/movies' ? './search-movies' : './'}
          >
            <BackArrow pathname={pathname} />
          </Link>
          <div className={styles.progress}>
            <p>{thirty ? '30%' : sixty ? '60%' : full ? '100%' : '0%'}</p>
            <BurgerSvg />
          </div>
        </div>

        <div
          className={
            thirty
              ? styles.progressBarThirty
              : sixty
              ? styles.progressBarSixty
              : full
              ? styles.progressBarFull
              : styles.progressBar
          }
          data-label="Progress..."
        ></div>
      </nav>
    </header>
  )
}

export default NavBar
