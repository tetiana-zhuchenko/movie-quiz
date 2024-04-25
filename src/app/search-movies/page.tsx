'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'

const SearchMovies = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/movies')
  }

  const handleSubmit = () => {}
  return (
    <main className={styles.main}>
      <NavBar />
      <div>
        <Title text={'Enter movie title'} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="search"></label>
          <input
            className={styles.input}
            type="text"
            id="search"
            name="search"
            required
            placeholder="Movie title here"
          />
        </form>
      </div>
      <Button handleClick={handleClick} title={'Continue'} type={'submit'} />

      {/* <Link href={'movies'}>to result</Link> */}
    </main>
  )
}
export default SearchMovies
