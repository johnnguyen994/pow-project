import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import React, { useCallback } from 'react'
import Box from '@mui/material/Box'
import { visuallyHidden } from '@mui/utils'
import { Order } from 'state/types'

export interface SpellData {
  id?: number
  index: string
  name: string
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof SpellData | null
  label: string
  numeric: boolean
  disableSort?: boolean
}

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof SpellData) => void
  order: Order
  orderBy: string
  headCells: readonly HeadCell[]
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
  const { order, orderBy, onRequestSort, headCells } = props

  const createSortHandler = useCallback(
    (property: keyof SpellData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    },
    [onRequestSort],
  )

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            width={headCell.numeric ? '8%' : 'auto'}
            align="right"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
