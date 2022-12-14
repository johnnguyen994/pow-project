/* eslint-disable no-restricted-syntax */
import React from 'react'
import { SpellDetailItem } from 'state/types'
import { CardContent, TextBase } from 'style/Commons'
import { devices } from 'style/devices'
import styled from 'styled-components'

const Wrapper = styled(CardContent)`
  margin-top: 20px;
`

const Table = styled.table`
  margin-top: 16px;
  margin-bottom: 20px;
  border-collapse: collapse;
  width: 50%;
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    border: 1px solid #ddd;
    padding: 12px 8px;
    text-align: left;
    background-color: #88b3f7;
    color: white;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`

interface SpellDamageProps {
  item: SpellDetailItem
}

const SpellDamage: React.FC<SpellDamageProps> = (props) => {
  const { item } = props

  const generateData = (object: Record<any, string>) => {
    const data = []
    for (const [key, value] of Object.entries(object)) {
      data.push({
        level: key,
        damage: value,
      })
    }

    return data
  }

  const renderDamageTable = (
    data: {
      [x: string]: any
    },
    label,
  ) => {
    return (
      <>
        <TextBase>{label}</TextBase>
        <Table>
          <tr>
            <th>Level</th>
            <th>Damage</th>
          </tr>
          {generateData(data).map((value) => {
            return (
              <tr>
                <td>{value.level}</td>
                <td>{value.damage}</td>
              </tr>
            )
          })}
        </Table>
      </>
    )
  }

  return (
    <Wrapper>
      {item.damage?.damage_at_character_level &&
        renderDamageTable(item.damage.damage_at_character_level, 'Damage at character level')}
      {item.damage?.damage_at_slot_level && renderDamageTable(item.damage.damage_at_slot_level, 'Damage at slot level')}
    </Wrapper>
  )
}

export default SpellDamage
