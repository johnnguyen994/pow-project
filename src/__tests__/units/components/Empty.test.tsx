import React from 'react'
import { render, screen } from '@testing-library/react'
import Empty from 'components/Empty'

describe('Test Empty Component', () => {
  beforeEach(() => {
    render(<Empty />)
  })

  test('Contain text', () => {
    const empty = screen.getByTestId('empty-text')
    expect(empty).toBeInTheDocument()
  })
})
