'use client'

import Title from '../Title/Title'
import styles from './NoMovieFound.module.css'
import errImg from '../../../../public/icons/errImg.svg'
import Image from 'next/image'

export default function NoMovieFound() {
  return (
    <div className={styles.containerNotFond}>
      <Image width={135} height={135} src={errImg} alt="icon" />
      <Title text={'Oops, no movie found'} />
    </div>
  )
}
