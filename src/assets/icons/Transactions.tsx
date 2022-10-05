type Props = {
  color?: string
}

function Icon({ color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="26"
      fill="none"
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
