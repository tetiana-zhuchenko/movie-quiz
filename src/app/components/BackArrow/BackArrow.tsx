const BackArrow = ({ pathname }: { pathname: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={pathname === '/' ? '0.4' : '0.9'}>
        <path
          d="M10.9004 4L5.00089 9.8995L10.9004 15.799"
          stroke="#212121"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default BackArrow
