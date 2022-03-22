import { reducer } from '../reducer'
import { fetchFailedAction, fetchStartAction, fetchSucceededAction, setCountryAction } from '../actions'
import { FETCH_FAILED, FETCH_START, FETCH_SUCCEEDED, SET_COUNTRY } from '../types'
import { resultsTestExample } from '../utils'


describe('Store', () => {
  const city = 'curitiba'

  describe('Actions Response', () => {
    it('setCountryAction should work', () => {
      const result = setCountryAction({ city })
  
      expect(result.payload).toMatch(city)
      expect(result.type).toMatch(SET_COUNTRY)
    })
  
    it('fetchStartAction should work', () => {
      const result = fetchStartAction({ city })
  
      expect(result.payload).toMatch(city)
      expect(result.type).toMatch(FETCH_START)
    })
  
    it('fetchSucceededAction should work', () => {
      const result = fetchSucceededAction({ results: resultsTestExample  })
  
      expect(result.payload.length).toBeGreaterThan(0)
      expect(result.payload[0].temp).not.toBeNaN()
      expect(result.type).toMatch(FETCH_SUCCEEDED)
    })
  
    it('fetchFailedAction should work', () => {
      const result = fetchFailedAction()
  
      expect(result.type).toMatch(FETCH_FAILED)
    })
  })

  describe('Reducer and Actions integration', () => {
    const initialState = {
      city: 'buenos aires',
      results: [],
      loading: false,
      error: false,
    }

    it('Should update the city data on store', () => {
      const action = setCountryAction({ city })

      const result = reducer(initialState, action)

      expect(result.city).toMatch(city)
    })

    it('Should set loading true on store', () => {
      const action = fetchStartAction({ city })

      const result = reducer(initialState, action)

      expect(result.loading).toBeTruthy()
    })

    it('Should add elements to results on store', () => {
      expect(initialState.results.length).toBe(0)

      const action = fetchSucceededAction({ results: resultsTestExample })

      const result = reducer(initialState, action)

      expect(result.results.length).toBeGreaterThan(0)
    })

  })
})