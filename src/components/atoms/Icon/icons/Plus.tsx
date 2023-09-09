import { IconProps } from '../types'

function Icon({ color, height = 16, width = 17, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 16 17"
      {...props}
    >
      <path
        stroke={color ? color : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M8 3.833v9.334M3.333 8.5h9.334"
      ></path>
    </svg>
  )
}

export default Icon
