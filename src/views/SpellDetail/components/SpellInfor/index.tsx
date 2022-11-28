import PropertyList from 'components/PropertyList'
import { useSpellTabData } from 'hooks/useSpellTabData'
import React from 'react'
import { SpellDetailItem } from 'state/types'

interface SpellInforProps {
  item: SpellDetailItem
}

const SpellInfor: React.FC<SpellInforProps> = (props) => {
  const { item } = props
  const { dataSpellInfor } = useSpellTabData(item)

  return <PropertyList data={dataSpellInfor} />
}

export default SpellInfor
