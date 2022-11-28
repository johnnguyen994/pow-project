import { useMemo } from 'react'
import { SpellDetailItem } from 'state/types'

export const useSpellTabData = (item: SpellDetailItem) => {
  const dataSpellOverview = useMemo(() => {
    return [
      {
        label: '_id',
        value: item._id,
        testid: 'id-overview',
      },
      {
        label: 'Spell Index',
        value: item.index,
        testid: 'index-overview',
      },
      {
        label: 'Spell Name',
        value: item.name,
        testid: 'name-overview',
      },
    ]
  }, [item])

  const dataSpellInfor = useMemo(() => {
    return [
      {
        label: 'Range',
        value: item.range,
        testid: 'range-detail',
      },
      {
        label: 'Ritual',
        value: item.ritual.toString(),
        testid: 'ritual-detail',
      },
      {
        label: 'Duration',
        value: item.duration,
        testid: 'duration-detail',
      },
      {
        label: 'Concentration',
        value: item.concentration.toString(),
        testid: 'concentration-detail',
      },
      {
        label: 'ct-detail',
        value: item.casting_time,
        testid: 'duration-detail',
      },
      {
        label: 'Level',
        value: item.level,
        testid: 'level-detail',
      },
    ]
  }, [item])

  return { dataSpellOverview, dataSpellInfor }
}
