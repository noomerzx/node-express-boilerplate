const { getAll } = require('../../../../src/services/movie')
const model = require('../../../../src/repositories')

/* global jest, describe, test, expect */
describe('How to get movie list', () => {
  test('CASE-01 : [Success] Get bill without sort and order', async () => {
    model.movie.customQuery = jest.fn().mockReturnValueOnce([])
    model.movie.count = jest.fn().mockReturnValue(0)
    expect(await getAll(10, 0, null, null)).toMatchObject({
      data: [],
      count: 0
    })
    expect(model.movie.customQuery).toHaveBeenCalled()
    expect(model.movie.count).toHaveBeenCalled()
  })
})
