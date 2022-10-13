import { ReactElement } from 'react'

export type SelectInputProps = {
  placeholder?: string
  icon: ReactElement
}

export type SelectOptionsProps = {
  value: string
  label: string
  itemIndicator: ReactElement
}

type Item = SelectOptionsProps & {
  group?: string
  groupLabel?: ReactElement
}

export type Options = Item[] | undefined

export type Props = SelectInputProps & {
  options?: Options
}
