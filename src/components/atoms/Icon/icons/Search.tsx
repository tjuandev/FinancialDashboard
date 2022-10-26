import { IconProps } from '../types'

function Icon({ color, height = 23, width = 23 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 23 23"
    >
      <path
        stroke={color ? color : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M10.444 18.889a8.444 8.444 0 100-16.889 8.444 8.444 0 000 16.889zM21 21l-4.592-4.592"
      ></path>
    </svg>
  )
}

export default Icon
