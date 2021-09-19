import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { getLocation, searchLocations } from '../location'

const server = setupServer(
  rest.get('/api/location/*', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('get location data', async () => {
  const { data, error } = await getLocation({ woeid: 1234 })
  expect(data).toStrictEqual({ greeting: 'hello there'})
  expect(error).toBe(null)
})

test('search location default', async () => {
  const { data, error } = await getLocation({})
  expect(data).toStrictEqual({"greeting": "hello there"})
  expect(error).toBe(null)
})

test('get location data fail', async () => {
  server.use(
    rest.get('/api/location/1234', (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    }),
  )
  const { data, error } = await getLocation({ woeid: 1234 })
  expect(data).toBe(null)
  expect(error.toString()).toBe(`Error: Failed to get location`)
})

test('search location data', async () => {
  const { data, error } = await searchLocations({ search: 'New york' })
  expect(data).toStrictEqual({ greeting: 'hello there'})
  expect(error).toBe(null)
})

test('search location without query string', async () => {
  const { data, error } = await searchLocations({ search: '' })
  expect(data).toStrictEqual([])
  expect(error).toBe(null)
})

test('search location data fail', async () => {
  server.use(
    rest.get('/api/location/search', (req, res, ctx) => {
      return res(
        ctx.status(400)
      )
    }),
  )
  const { data, error } = await searchLocations({ search: 'New york' })
  expect(data).toStrictEqual([])
  expect(error.toString()).toBe(`Error: Failed to search locations`)
})