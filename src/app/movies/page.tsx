'use client'

import { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import NavBar from '../components/NavBar/NavBar'

import styles from './page.module.css'
import { TMovie } from '../types'
import Movie from '../components/movie/Movie'

const Movies = () => {
  const [movies, setMovies] = useState<TMovie[]>()
  const movieTitle =
    typeof window !== 'undefined' ? window.localStorage.getItem('query') : null
  const API_KEY = 'a1da5cf1'

  const MOVIES_API = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}`

  const moreThenOne = movies ? movies.length > 1 : false
  const handleClick = () => {}

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(MOVIES_API)

        if (!response.ok) {
          throw new Error('Failed to connect to Server')
        }
        const result = await response.json()
        const movies = result.Search as TMovie[]
        console.log(movies)
        setMovies(movies)
      } catch (err) {
        console.error(err)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main className={styles.main}>
      <NavBar full={true} />
      {movies?.map((m) => (
        <Movie
          key={m.imdbID}
          title={m.Title}
          year={m.Year}
          poster={m.Poster}
          moreThenOne={moreThenOne}
        />
      ))}

      <Button
        handleClick={handleClick}
        title={'Complete'}
        type={'submit'}
        disabled
      />
    </main>
  )
}

export default Movies
