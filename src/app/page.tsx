'use client'

import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import Input from './components/Input/Input'
import drama from '../../public/icons/drama.png'
import comedy from '../../public/icons/comedy.png'
import Image from 'next/image'

const Home = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/search-movies')
  }

  const handleSubmit = () => {}
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        <Title text={'Your favorite movie genre?'} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputsWrapper}>
            <Input value={'Drama'} />
            <Input value={'Comedy'} />
            <Input value={'Action'} />
            <Input value={'Thriller'} />
            <Input value={'Science fiction'} />
          </div>

          <Button
            handleClick={handleClick}
            title={'Continue'}
            type={'submit'}
          />
        </form>
        <div></div>
      </div>
    </main>
  )
}

export default Home
