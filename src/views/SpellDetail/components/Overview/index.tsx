import PropertyList from 'components/PropertyList'
import React, { useMemo } from 'react'
import { SpellDetailItem } from 'state/types'

interface OverviewProps {
  item: SpellDetailItem
}

const Overview: React.FC<OverviewProps> = (props) => {
  const { item } = props
  const data = useMemo(() => {
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
  return <PropertyList data={data} />
}

export default Overview
