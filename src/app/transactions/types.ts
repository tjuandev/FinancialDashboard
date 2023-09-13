import { ColumnDef } from '@tanstack/react-table'

export type TransactionsTable = {
  date: string
  description: {
    columnWidth: string
    value: string
  }
  type: string
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
  isLoading: boolean
  rows?: TransactionsTable[]
}
