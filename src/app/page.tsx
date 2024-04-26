'use client'

import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import Input from './components/Input/Input'
import initialGenreList from './data/initialGenreList'
import { useState } from 'react'
import { TGenre } from './types'

const Home = () => {
  const router = useRouter()
  // const [isActive, setIsActive] = useState(false)
  const [genreList, setGenreList] = useState(initialGenreList)
  // const handleClick = () => {
  //   isActive ? router.push('/search-movies') : null
  // }
  const handleClick = () => {
    router.push('/search-movies')
  }

  console.log(genreList)
  const hasCheckedGenre = (genreList: TGenre[]): boolean => {
    return genreList.some((genre) => genre.checked)
  }
  const handleSubmit = () => {}
  return (
    <main className={styles.main}>
      <NavBar />
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
