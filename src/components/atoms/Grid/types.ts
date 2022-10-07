import theme from 'theme'

type SpacingInferenceType = typeof theme['spacing']

export type GridProps = {
  rows: number | string
  columns: number | string
  gap?: keyof SpacingInferenceType
}
