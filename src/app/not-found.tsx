import Link from 'next/link'
import Title from './components/Title/Title'
import styles from './page.module.css'
import errImg from '../../public/icons/errImg.svg'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.containerNotFond}>
        <Image width={135} height={135} src={errImg} alt="icon" />
        <Title text={'Not Found Page'} />
        <p>Could not find requested resource</p>
        <Link className={styles.link} href="/">
          Return Home
        </Link>
      </div>
    </main>
  )
}
