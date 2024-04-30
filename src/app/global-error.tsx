'use client'

import Link from 'next/link'
import Image from 'next/image'
import Title from './components/Title/Title'
import errImg from '../../public/icons/errImg.svg'
import styles from './page.module.css'

export default function GlobalError() {
  return (
    <html>
      <body>
        <main className={styles.main}>
          <div className={styles.containerNotFond}>
            <Image width={135} height={135} src={errImg} alt="icon" />
            <Title text={'Oops! Something went wrong'} />
            <p>Could not find requested resource</p>
            <Link className={styles.link} href="/">
              Return Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
