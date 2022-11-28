import React from 'react'
import styled from 'styled-components'

interface TabPanelProps {
  children: React.ReactNode
  index: number
  value: number
}

const Wrapper = styled.div`
  display: block;
  padding: 3px;
`

const TabPane: React.FC<TabPanelProps> = ({ children, ...props }) => {
  const { value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Wrapper>{children}</Wrapper>}
    </div>
  )
}

export default TabPane
