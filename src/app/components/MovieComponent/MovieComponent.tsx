'use client'

import Title from '../Title/Title'
import styles from './MovieComponent.module.css'

interface MovieProps {
  title: string
  year: string
  poster: string
  moreThenOne: boolean
}

const MovieComponent = ({ title, year, poster, moreThenOne }: MovieProps) => {
  return (
    <>
      <div className={moreThenOne ? styles.moviesList : styles.movie}>
        <img
          alt="Poster"
          className={moreThenOne ? styles.imageList : styles.image}
          src={poster}
        />
        <div className={moreThenOne ? styles.infoList : styles.info}>
          {moreThenOne ? <h3>{title}</h3> : <Title text={title} />}
          <p>{year}</p>
        </div>
      </div>
    </>
  )
}

export default MovieComponent
