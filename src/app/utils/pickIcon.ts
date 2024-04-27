import drama from '../../../public/icons/drama.png'
import comedy from '../../../public/icons/comedy.png'
import action from '../../../public/icons/action.png'
import scienceFiction from '../../../public/icons/scienceFiction.png'
import thriller from '../../../public/icons/thriller.png'

const pickIcon = (value: string) => {
  let icon = drama
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

  return icon
}

export default pickIcon
