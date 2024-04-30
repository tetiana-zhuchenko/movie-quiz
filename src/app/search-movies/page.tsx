'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'
import validate from '../utils/validate'

import styles from './page.module.css'

const SearchMovies = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const [validatedValue, setValidatedValue] = useState('')
  const [isError, setIsError] = useState(false)
  const progress = inputValue.length > 0 ? true : false

  useEffect(() => {
    if (inputValue) {
      const validatedMovieTitle = validate(inputValue)
      if (validatedMovieTitle) {
        setValidatedValue(validatedMovieTitle)
        setIsError(false)
      } else {
        setIsError(true)
      }
    }
  }, [inputValue])

  const handleClick = async () => {
    if (!isError) {
      window.localStorage.setItem('query', JSON.stringify(validatedValue))
      router.push('./movies')
    } else {
      return
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClick()
  }

  return (
    <main className={styles.main}>
      <NavBar thirty={!progress} sixty={progress} />
      <div>
        <Title text={'Enter movie title'} />
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="search"></label>

          <input
            className={!isError ? styles.input : styles.invalidInput}
            type="text"
            id="search"
            name="search"
            required
            placeholder="Movie title here"
            value={inputValue}
            onChange={(e) =>
              setInputValue(e.target.value.toLocaleLowerCase().trim())
            }
          />
          {isError && <p className={styles.error}>Invalid input</p>}
        </form>
      </div>
      <Button
        handleClick={handleClick}
        title={'Continue'}
        type={'button'}
        disabled={!progress}
      />
    </main>
  )
}
export default SearchMovies
