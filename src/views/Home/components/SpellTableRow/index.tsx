import { Favorite, FavoriteBorder, Visibility } from '@mui/icons-material'
import { Alert, IconButton, Snackbar, TableCell, TableRow } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'state'
import { selectFavouriteData, setFavouriteData } from 'state/spell'
import { SpellListItem } from 'state/types'
import styled from 'styled-components'
import { checkIfFavourite } from 'utils/listing'

const SpellTableCell = styled(TableCell)`
  padding: 0px 16px !important;
`

interface SpellTableRowProps {
  row: SpellListItem
}

const SpellTableRow: React.FC<SpellTableRowProps> = (props) => {
  const { row } = props
  const [openMessage, setOpenMessage] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const favouriteData = useSelector(selectFavouriteData)
  const isFavourite = useMemo(() => {
    return checkIfFavourite(row.index, favouriteData)
  }, [favouriteData])

  const onHandleFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    dispatch(setFavouriteData({ type: isFavourite ? 'remove' : 'add', item: row }))
    setOpenMessage(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenMessage(false)
  }

  const onGoToSpellPage = () => {
    navigate(`/spell-detail/${row.index}`)
  }

  return (
    <>
      <TableRow
        onClick={onGoToSpellPage}
        hover
        tabIndex={-1}
        key={row.id}
        style={{ backgroundColor: isFavourite ? '#c0defc' : '#fff' }}
      >
        <SpellTableCell data-testid="id-row" align="left">
          {row.id}
        </SpellTableCell>
        <SpellTableCell data-testid="index-row" align="left">
          {row.index}
        </SpellTableCell>
        <SpellTableCell data-testid="name-row" align="left">
          {row.name}
        </SpellTableCell>
        <SpellTableCell align="right">
          <IconButton aria-label="view" size="large" onClick={onGoToSpellPage}>
            <Visibility />
          </IconButton>
          <IconButton onClick={onHandleFavourite} aria-label="bookmark" size="large">
            {isFavourite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </SpellTableCell>
      </TableRow>
      <Snackbar open={openMessage} autoHideDuration={1200} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isFavourite ? 'success' : 'info'} sx={{ width: '100%' }}>
          {isFavourite ? 'Add to favourite success!' : 'Remove from favourite success!'}
        </Alert>
      </Snackbar>
    </>
  )
}

export default SpellTableRow
