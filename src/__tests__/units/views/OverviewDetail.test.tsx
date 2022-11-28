import React from 'react'
import { render, screen } from '@testing-library/react'
import { spellDetail } from '__tests__/data/spells'
import Overview from 'views/SpellDetail/components/Overview'
import { ThemeProvider } from 'styled-components'
import powTheme from 'style/theme'

describe('Test Overview of Detail page', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={powTheme}>
        <Overview item={spellDetail} />
      </ThemeProvider>,
    )
  })

  test('Exist text', () => {
    const idDetail = screen.getByTestId('id-overview')
    const indexDetail = screen.getByTestId('index-overview')
    const nameDetail = screen.getByTestId('name-overview')

    expect(idDetail).toHaveTextContent('6379e20e377ccb80b7d66348')
    expect(indexDetail).toHaveTextContent('alter-self')
    expect(nameDetail).toHaveTextContent('Alter Self')
  })
})
