import PropertyList from 'components/PropertyList'
import { useSpellTabData } from 'hooks/useSpellTabData'
import React from 'react'
import { SpellDetailItem } from 'state/types'

interface OverviewProps {
  item: SpellDetailItem
}

const Overview: React.FC<OverviewProps> = (props) => {
  const { item } = props

  const { dataSpellOverview } = useSpellTabData(item)

  return <PropertyList data={dataSpellOverview} />
}

export default Overview
