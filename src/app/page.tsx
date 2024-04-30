'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import Input from './components/Input/Input'
import { initialGenreList } from './data/initialData'
import { TGenre } from './types'
import styles from './page.module.css'

const Home = () => {
  const router = useRouter()

  const [genreList, setGenreList] = useState(initialGenreList)

  const handleClick = () => {
    const checkedGenres = genreList
      .filter((genre) => genre.checked)
      .map((genre) => genre.title)
    window.localStorage.setItem('genres', JSON.stringify(checkedGenres))
    router.push('./search-movies')
  }

  const hasCheckedGenre = (genreList: TGenre[]): boolean => {
    return genreList.some((genre) => genre.checked)
  }

  const handleSubmit = () => {}
  return (
    <main className={styles.main}>
      <NavBar thirty={hasCheckedGenre(genreList)} />
      <div className={styles.container}>
        <Title text={'Your favorite movie genre?'} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputsWrapper}>
            {initialGenreList.map((genre) => (
              <Input
                key={genre.id}
                value={genre.title}
                genreList={genreList}
                setGenreList={setGenreList}
              />
            ))}
          </div>

          <Button
            handleClick={handleClick}
            title={'Continue'}
            type={'button'}
            disabled={!hasCheckedGenre(genreList)}
          />
        </form>
        <div></div>
      </div>
    </main>
  )
}

export default Home
