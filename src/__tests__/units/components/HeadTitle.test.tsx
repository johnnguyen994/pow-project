import React from 'react'
import { render, screen } from '@testing-library/react'
import HeadTitle from 'components/HeadTitle'

describe('Test HeadTitle Component', () => {
  beforeEach(() => {
    render(<HeadTitle title="Spell List" />)
  })

  test('Contain text', () => {
    const empty = screen.getByTestId('heading-title')
    expect(empty).toHaveTextContent('Spell List')
  })
})
