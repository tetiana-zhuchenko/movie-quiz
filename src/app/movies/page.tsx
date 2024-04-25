'use client'

import Image from 'next/image'
import Button from '../components/Button/Button'
import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import styles from './page.module.css'

const Movies = () => {
  const handleClick = () => {}
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.movie}>
        <img
          alt="Poster"
          className={styles.image}
          src={
            'https://www.bluedogposters.com.au/cdn/shop/products/PP34925_1400x.jpg?v=1674016516} className={styles.image'
          }
        />
        <div className={styles.info}>
          <Title text={'Movie title'} />
          <p>1997</p>
        </div>
      </div>
      <Button handleClick={handleClick} title={'Complete'} type={'submit'} />
    </main>
  )
}

export default Movies
