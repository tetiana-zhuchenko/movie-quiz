'use client'

import { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import NavBar from '../components/NavBar/NavBar'
import styles from './page.module.css'
import { TMovie } from '../types'
import MovieComponent from '../components/MovieComponent/MovieComponent'
import NoMovieFound from '../components/NoMovieFound.tsx/NoMovieFound'
import { useRouter } from 'next/navigation'

const Movies = () => {
  const router = useRouter()
  const [movies, setMovies] = useState<TMovie[]>()
  const [error, setError] = useState(false)
  const movieTitle =
    typeof window !== 'undefined' ? window.localStorage.getItem('query') : null

  const API_KEY = process.env.API_KEY
  const MOVIES_API = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}`
  const moreThenOne = movies ? movies.length > 1 : false
  const handleClick = () => {
    router.push('./')
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(MOVIES_API)

        if (!response.ok) {
          throw new Error('Failed to connect to Server')
        }
        const result = await response.json()

        if (result.Response === 'False') {
          throw new Error(result.Error)
        }

        const movies = result.Search as TMovie[]
        console.log(movies)
        setMovies(movies)
      } catch (err: any) {
        console.error(err)
        setError(true)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main className={styles.main}>
      <NavBar full={true} />
      {error ? (
        <NoMovieFound />
      ) : (
        <>
          <div className={moreThenOne ? styles.moviesListWrapper : ''}>
            {movies?.map((m) => (
              <MovieComponent
                key={m.imdbID}
                title={m.Title}
                year={m.Year}
                poster={m.Poster}
                moreThenOne={moreThenOne}
              />
            ))}
          </div>

          <Button
            handleClick={handleClick}
            title={'Complete'}
            type={'submit'}
            disabled={false}
          />
        </>
      )}
    </main>
  )
}

export default Movies
