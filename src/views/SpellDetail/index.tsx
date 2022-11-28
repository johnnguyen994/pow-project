import React, { useCallback, useEffect, useMemo } from 'react'
import HeadTitle from 'components/HeadTitle'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSpellDetail } from 'hooks/useSpellDetail'
import SkeletonLoading from 'components/Loader/SkeletonLoading'
import BasicTabs from 'components/Tabs/BasicTabs'
import { useQueryClient } from '@tanstack/react-query'
import Button from '@mui/material/Button'
import { BookmarkAdd, BookmarkRemoveOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectFavouriteData, setFavouriteData } from 'state/spell'
import { checkIfFavourite } from 'utils/listing'
import { FavouriteType } from 'state/types'
import { useAppDispatch } from 'state'
import { Alert, Snackbar } from '@mui/material'
import Overview from './components/Overview'
import SpellDamage from './components/SpellDamage'
import SpellInfor from './components/SpellInfor'

const Wrapper = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
`

function SpellDetail() {
  const { index } = useParams()
  const { spellDetail, isLoading } = useSpellDetail(index)
  const [openMessage, setOpenMessage] = React.useState<boolean>(false)
  const favouriteData = useSelector(selectFavouriteData)
  const isFavourite = useMemo(() => {
    if (!spellDetail) return false
    return checkIfFavourite(spellDetail.index, favouriteData)
  }, [spellDetail, favouriteData])
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const tabs = useMemo(() => {
    return [
      {
        label: 'Overview',
        content: <Overview item={spellDetail} />,
      },
      {
        label: 'Spell Damage',
        content: <SpellDamage item={spellDetail} />,
      },
      {
        label: 'Spell Information',
        content: <SpellInfor item={spellDetail} />,
      },
    ]
  }, [spellDetail])

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenMessage(false)
  }

  const onHandleFavourite = (type: FavouriteType) => {
    if (!spellDetail) return
    const item = {
      index: spellDetail.index,
      url: spellDetail.url,
      name: spellDetail.name,
    }
    dispatch(setFavouriteData({ type, item }))
    setOpenMessage(true)
  }

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['spell-detail'], exact: true })
    }
  }, [])

  const renderButtons = useCallback(() => {
    if (isFavourite)
      return (
        <Button variant="outlined" endIcon={<BookmarkRemoveOutlined />} onClick={() => onHandleFavourite('remove')}>
          Remove from favourite
        </Button>
      )
    return (
      <Button variant="contained" endIcon={<BookmarkAdd />} onClick={() => onHandleFavourite('add')}>
        Add to favourite
      </Button>
    )
  }, [isFavourite, spellDetail])

  return (
    <Wrapper>
      <HeadTitle title="Spell Detail" renderRight={renderButtons()} />
      <Content>{isLoading || !spellDetail ? <SkeletonLoading /> : <BasicTabs tabs={tabs} />}</Content>
      <Snackbar open={openMessage} autoHideDuration={1200} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isFavourite ? 'success' : 'info'} sx={{ width: '100%' }}>
          {isFavourite ? 'Add to favourite success!' : 'Remove from favourite success!'}
        </Alert>
      </Snackbar>
    </Wrapper>
  )
}

export default SpellDetail
