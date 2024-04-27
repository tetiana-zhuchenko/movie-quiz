'use client'

import styles from './page.module.css'
import { useRouter } from 'next/navigation'

import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'
import { useState } from 'react'

const SearchMovies = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const progress = inputValue.length > 0 ? true : false

  const handleClick = async () => {
    const trimmedValue = inputValue.trim().toLowerCase()
    if (/^[a-zA-Z0-9]+$/.test(trimmedValue)) {
      setError(!error)
      setInputValue(trimmedValue)
      window.localStorage.setItem('query', JSON.stringify(inputValue))
      router.push('/movies')
    } else {
      setError(!error)
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
            className={!error ? styles.input : styles.invalidInput}
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
          {error && <p className={styles.error}>Invalid input</p>}
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
