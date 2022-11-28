import { Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, TextField } from '@mui/material'
import Empty from 'components/Empty'
import React, { useCallback, useEffect } from 'react'
import { Order, SpellListItem } from 'state/types'
import styled from 'styled-components'
import { getComparator, stableSort } from 'utils/listing'
import _debounce from 'lodash/debounce'
import SpellTableRow from '../SpellTableRow'
import EnhancedTableHead, { HeadCell, SpellData } from './EnhancedTableHead'
import PaginationActions from './PaginationActions'

interface ListSpellTableProps {
  data: { id: number; index: string; name: string }[]
}
const Wrapper = styled.div`
  width: 100%;
`
const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'Id Spell',
  },
  {
    id: 'index',
    numeric: false,
    disablePadding: false,
    label: 'Spell Index',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Spell Name',
  },
  {
    id: null,
    numeric: false,
    disablePadding: false,
    label: 'Actions',
  },
]
const ListSpellTable: React.FC<ListSpellTableProps> = (props) => {
  const { data } = props
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof SpellData>('id')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [currentData, setCurrentData] = React.useState<any[]>([])

  useEffect(() => {
    if (data) {
      setCurrentData(data)
      return
    }
    setCurrentData([])
  }, [data])

  const onSearchWithKeyword = (keyword: string) => {
    if (!keyword) {
      setCurrentData(data)
      return
    }
    const dataArr = [...data]
    const dataList = dataArr.filter((valueItem) => valueItem.name.toLowerCase().includes(keyword.toLowerCase()))
    setCurrentData(dataList)
  }
  const debounceFn = useCallback(_debounce(onSearchWithKeyword, 200), [])
  const handleRequestSort = useCallback(
    (event: React.MouseEvent<unknown>, property: keyof SpellData) => {
      const isAsc = orderBy === property && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(property)
    },
    [order, orderBy],
  )

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage)
  }, [])

  const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }, [])

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    debounceFn(value)
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - currentData.length) : 0

  if (!data.length) return <Empty />

  return (
    <Wrapper>
      <TextField
        id="outlined-basic"
        label="Search keyword"
        variant="outlined"
        onChange={handleChangeInput}
        sx={{ width: '340px', marginBottom: '12px' }}
      />
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(currentData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <React.Fragment key={row.id}>
                      <SpellTableRow row={row as SpellListItem} />
                    </React.Fragment>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          rowsPerPageOptions={[10]}
          count={currentData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={PaginationActions}
        />
      </Paper>
    </Wrapper>
  )
}

export default ListSpellTable
