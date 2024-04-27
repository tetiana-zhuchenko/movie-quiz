'use Client'

import Image from 'next/image'
import styles from './Input.module.css'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { TGenre } from 'src/app/types'
import pickIcon from 'src/app/utils/pickIcon'

interface InputProps {
  value: string
  genreList: TGenre[]
  setGenreList: Dispatch<SetStateAction<TGenre[]>>
}

const Input = ({ value, genreList, setGenreList }: InputProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const icon = pickIcon(value)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    const newGenreList = genreList.map((genre) => {
      if (genre.title === value) {
        return { ...genre, checked: e.target.checked }
      }
      return genre
    })
    setGenreList(newGenreList)
    window.localStorage.setItem(e.target.name, JSON.stringify(e.target.value))
  }
  return (
    <label
      className={isChecked ? styles.inputLabelChecked : styles.inputLabel}
      htmlFor={value.toLowerCase()}
    >
      <span className={styles.genre}>
        <Image width={24} height={24} alt="icon" src={icon} />
        <p>{value}</p>
      </span>

      <input
        className={styles.input}
        type="checkbox"
        id={value.toLowerCase()}
        name={`genre`}
        value={value.toLowerCase()}
        onChange={handleOnChange}
      />
    </label>
  )
}

export default Input
