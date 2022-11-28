import { checkIfFavourite, descendingComparator } from 'utils/listing'
import { spellDetail, spellList } from '__tests__/data/spells'

const dataDescendingComparator = [
  [
    {
      id: 2,
    },
    {
      id: 4,
    },
    1,
  ],
  [
    {
      id: 6,
    },
    {
      id: 3,
    },
    -1,
  ],
  [
    {
      id: 4,
    },
    {
      id: 4,
    },
    0,
  ],
]

describe('Listing tests', () => {
  test.each(dataDescendingComparator)('With DescendingComparator', (objectA, objectB, expected) => {
    const result = descendingComparator(objectA, objectB, 'id')
    expect(result).toEqual(expected)
  })

  test('With checkIfFavourite', () => {
    const result = checkIfFavourite(spellDetail.index, spellList.results)

    expect(result).toBeTruthy()
  })
})
