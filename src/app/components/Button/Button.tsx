interface ButtonProps {
  handleClick: () => void
  title: string
  type: 'submit' | 'reset' | 'button' | undefined
}

const Button: React.FC<ButtonProps> = ({ handleClick, title, type }) => {
  return (
    <button type={type} onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button
