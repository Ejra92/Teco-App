import { getWeatherByCity } from '../getWeatherByCity'

it('should return results', async () => {
  const city = 'Buenos Aires'
  const results = await getWeatherByCity({ city })

  expect(results.length).toBeGreaterThan(1)
  expect(results[0].dt).not.toBeUndefined()
  expect(results[0].temp).not.toBeUndefined()
  expect(results[0].description).not.toBeUndefined()
  expect(results[0].humidity).not.toBeUndefined()
  expect(results[0].speed).not.toBeUndefined()
  expect(results[0].day).not.toBeUndefined()
})