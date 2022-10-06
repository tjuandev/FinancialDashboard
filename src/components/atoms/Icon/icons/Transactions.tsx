import { IconProps } from '../types'

function Icon({ color, height = 26, width = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      role="img"
      aria-label="Transactions"
      viewBox="0 0 20 26"
    >
      <path
        stroke={color ? color : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M18 24V10.25M10 24V2M2 24v-8.25"
      ></path>
    </svg>
  )
}

export default Icon
