import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import styles from './page.module.css'

export default function Loading() {
  return (
    <main className={styles.main}>
      <NavBar full={true} />
      <Title text={'Loading...'} />
    </main>
  )
}
