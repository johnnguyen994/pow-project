export type Order = 'asc' | 'desc'

export interface SpellListResponse {
  count: number
  results: SpellListObject[]
}

export interface SpellListObject {
  index: string
  name: string
  url?: string
}

export interface SpellListItem extends SpellListObject {
  id?: number
}

export interface SpellDetailItem {
  _id: string
  index: string
  name: string
  url: string
  desc: string[]
  higher_level: string[]
  range: string
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  attack_type: string
  damage: {
    damage_at_character_level?: {
      [x: string]: any
    }
    damage_at_slot_level?: {
      [x: string]: any
    }
    damage_type: SpellListObject
  }
  school: SpellListObject
  classes: SpellListObject[]
  subclasses: SpellListObject[]
}

export type FavouriteType = 'add' | 'remove'

export interface SpellFavouritePayload {
  type: FavouriteType
  item: SpellListItem
}
