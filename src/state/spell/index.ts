import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { SpellFavouritePayload, SpellListItem } from 'state/types'
import remove from 'lodash/remove'

export interface InitialSpellState {
  favourites: SpellListItem[]
}

const initialState: InitialSpellState = {
  favourites: [],
}

// Slice
const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    setFavouriteData: (state: InitialSpellState, action: PayloadAction<SpellFavouritePayload>) => {
      const { type, item } = action.payload
      const currentData = [...state.favourites]

      if (type === 'add') {
        currentData.push(item)
      } else {
        remove(currentData, (value) => value.index === item.index)
      }

      state.favourites = currentData
    },
  },
})

export const persistConfig: PersistConfig<InitialSpellState> = {
  key: 'spell',
  storage,
  whitelist: ['favourites'],
}

export const selectFavouriteData = createSelector(
  (state) => state.spell,
  (spellState) => {
    return spellState.favourites
  },
)

// Actions
export const { setFavouriteData } = spellSlice.actions

export const spellReducer = persistReducer(persistConfig, spellSlice.reducer)
