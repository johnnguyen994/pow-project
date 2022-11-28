import PropertyList from 'components/PropertyList'
import React, { useMemo } from 'react'
import { SpellDetailItem } from 'state/types'

interface SpellInforProps {
  item: SpellDetailItem
}

const SpellInfor: React.FC<SpellInforProps> = (props) => {
  const { item } = props

  const data = useMemo(() => {
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

  return <PropertyList data={data} />
}

export default SpellInfor
