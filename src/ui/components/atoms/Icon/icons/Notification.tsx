import { IconProps } from '../types'

function Icon({ color, height = 22, width = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={height}
      width={width}
      viewBox="0 0 20 22"
      role="img"
      aria-label="Notification"
      color={color}
      {...props}
    >
      <path
        stroke={color ? color : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7A6 6 0 104 7c0 7-3 9-3 9h18s-3-2-3-9zM11.73 20a1.999 1.999 0 01-3.46 0"
      ></path>
    </svg>
  )
}

export default Icon
