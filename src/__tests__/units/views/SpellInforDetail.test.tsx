import React from 'react'
import { render, screen } from '@testing-library/react'
import { spellDetail } from '__tests__/data/spells'
import { ThemeProvider } from 'styled-components'
import powTheme from 'style/theme'
import SpellInfor from 'views/SpellDetail/components/SpellInfor'

describe('Test Spell infor of detail page', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={powTheme}>
        <SpellInfor item={spellDetail} />
      </ThemeProvider>,
    )
  })

  test('Exist text', () => {
    const rangeDetail = screen.getByTestId('range-detail')
    const durationDetail = screen.getByTestId('duration-detail')
    const ctDetail = screen.getByTestId('ct-detail')

    expect(rangeDetail).toHaveTextContent('Self')
    expect(durationDetail).toHaveTextContent('Up to 1 hour')
    expect(ctDetail).toHaveTextContent('1 action')
  })
})
