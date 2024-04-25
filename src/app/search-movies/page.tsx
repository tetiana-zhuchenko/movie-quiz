'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const SearchMovies = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/movies')
  }
  return (
    <main className={styles.main}>
      <h1>SearchMovies</h1>
      <Link href={'movies'}>to result</Link>
      <button type="button" onClick={handleClick}>
        btn make search
      </button>
    </main>
  )
}
export default SearchMovies
