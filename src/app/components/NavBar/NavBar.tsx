'use client'

import { usePathname } from 'next/navigation'

import styles from './NavBar.module.css'
import file from '../../../../public/icons/Group384.svg'
import Link from 'next/link'
import BurgerSvg from '../BurgerSvg/BurgerSvg'
import BackArrow from '../BackArrow/BackArrow'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.wrapper}>
          <Link className={styles.link} href={'/'}>
            <BackArrow pathname={pathname} />
          </Link>
          <div className={styles.progress}>
            <p>10%</p>
            <BurgerSvg />
          </div>
        </div>
        <div className={styles.progressBar} data-label="Progress..."></div>
      </nav>
    </header>
  )
}

export default NavBar
