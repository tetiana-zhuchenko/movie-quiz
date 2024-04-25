import Image from 'next/image'
import styles from './Input.module.css'
import drama from '../../../../public/icons/drama.png'
import comedy from '../../../../public/icons/comedy.png'
import action from '../../../../public/icons/action.png'
import scienceFiction from '../../../../public/icons/scienceFiction.png'
import thriller from '../../../../public/icons/thriller.png'

interface InputProps {
  value: string
}

const Input = ({ value }: InputProps) => {
  let icon = drama
  // if (iconName === 'drama') icon = drama
  // if (iconName === 'comedy') icon = comedy
  switch (value) {
    case 'Drama':
      icon = drama
      break
    case 'Comedy':
      icon = comedy
      break
    case 'Action':
      icon = action
      break
    case 'ScienceFiction':
      icon = scienceFiction
      break
    case 'Thriller':
      icon = thriller
      break
    default:
      break
  }
  return (
    <label className={styles.inputLabel} htmlFor={value.toLowerCase()}>
      <span className={styles.genre}>
        <Image width={24} height={24} alt="icon" src={icon} />
        <p>{value}</p>
      </span>

      <input
        className={styles.input}
        type="checkbox"
        id={value.toLowerCase()}
        name="genre"
        value={value.toLowerCase()}
      />
    </label>
  )
}

export default Input
