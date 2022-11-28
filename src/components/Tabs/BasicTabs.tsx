import { Tab, Tabs } from '@mui/material'
import React, { memo } from 'react'
import { BoxTab, Wrapper } from './styles'
import TabPane from './TabPane'

interface BasicTabProps {
  tabs: {
    label: string
    content: React.ReactNode
  }[]
}

const BasicTabs: React.FC<BasicTabProps> = (props) => {
  const { tabs } = props
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <Wrapper>
      <BoxTab>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          {tabs.map((item, index) => {
            return <Tab key={`index-${item.label}`} label={item.label} {...a11yProps(index)} />
          })}
        </Tabs>
      </BoxTab>
      {tabs.map((item, index) => {
        return (
          <TabPane key={`index-${item.label}`} value={value} index={index}>
            {item.content}
          </TabPane>
        )
      })}
    </Wrapper>
  )
}

export default memo(BasicTabs)
