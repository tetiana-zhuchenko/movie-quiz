import Button from '../components/Button/Button'
import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import styles from './page.module.css'

const Movies = () => {
  const handleClick = () => {}
  return (
    <main className={styles.main}>
      <h1>Movies</h1>
      {/* <NavBar />
      <div>
        <Title text={'Enter movie title'} />
      </div>
      <Button handleClick={handleClick} title={'Complete'} type={'submit'} /> */}
    </main>
  )
}

export default Movies
