import React from 'react'
import { render, screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { spellList } from '__tests__/data/spells'
import SpellTableRow from 'views/Home/components/SpellTableRow'

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  },
})

const mockStore = configureMockStore()

describe('Test SpellTableRow', () => {
  const store = mockStore({
    spell: {
      favourites: spellList.results,
    },
  })
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <table>
            <tbody>
              <SpellTableRow row={spellList.results[0]} />
            </tbody>
          </table>
        </Provider>
      </BrowserRouter>,
    )
  })

  test('Exist text', () => {
    const idRow = screen.getByTestId('id-row')
    const indexRow = screen.getByTestId('index-row')
    const nameRow = screen.getByTestId('name-row')

    expect(idRow).toHaveTextContent('1')
    expect(indexRow).toHaveTextContent('acid-arrow')
    expect(nameRow).toHaveTextContent('Acid Arrow')
  })
})
