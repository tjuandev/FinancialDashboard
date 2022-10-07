import { IconProps } from '../types'

function Icon({ color, height = 29, width = 35 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 29"
    >
      <path
        stroke={color ? color : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M34.5 21.75L20.25 10.27l-7.5 6.043L1.5 7.25"
      ></path>
      <path
        stroke={color ? color : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M25.5 21.75h9V14.5"
      ></path>
    </svg>
  )
}

export default Icon
