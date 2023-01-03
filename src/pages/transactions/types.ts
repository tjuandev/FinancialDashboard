import { ColumnDef } from '@tanstack/react-table'

export type TransactionsTable = {
  type: string
  date: string
  description: {
    value: string
    columnWidth: string
  }
  value: string
}

export type TransactionsTableLiterals = keyof TransactionsTable

export type TableRequest = {
  columns?: TransactionsTableLiterals[]
  rows?: TransactionsTable[]
}

export type Columns = ColumnDef<TransactionsTable, unknown>[]

export type UseFetchTable = {
  columns: Columns
  rows?: TransactionsTable[]
  isLoading: boolean
}
