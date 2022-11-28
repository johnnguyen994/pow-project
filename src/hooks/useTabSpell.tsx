import React, { useMemo } from 'react'
import MainList from 'views/Home/components/MainList'
import FavouriteList from 'views/Home/components/FavouriteList'
import { SpellDetailItem } from 'state/types'
import Overview from 'views/SpellDetail/components/Overview'
import SpellDamage from 'views/SpellDetail/components/SpellDamage'
import SpellInfor from 'views/SpellDetail/components/SpellInfor'

export const useTabSpell = (spellDetail?: SpellDetailItem) => {
  const tabHomepage = useMemo(() => {
    return [
      {
        label: 'Spell list',
        content: <MainList />,
      },
      {
        label: 'Spell favourite list',
        content: <FavouriteList />,
      },
    ]
  }, [])

  const tabSpellDetail = useMemo(() => {
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

  return { tabHomepage, tabSpellDetail }
}
