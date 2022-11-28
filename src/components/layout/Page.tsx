/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import Container from './Container'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 15px;
  padding-bottom: 15px;
`

const PageMeta = () => {
  return (
    <Helmet>
      <title>Spell page title</title>
      <meta property="og:title" content="og title" />
      <meta property="og:description" content="og description" />
    </Helmet>
  )
}

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
