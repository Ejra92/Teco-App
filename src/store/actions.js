import {
  FETCH_FAILED,
  FETCH_START,
  FETCH_SUCCEEDED,
  SET_COUNTRY
} from './types'

export const setCountryAction = ({ city }) => ({
  type: SET_COUNTRY,
  payload: city
})

export const fetchStartAction = ({ city }) => ({
  type: FETCH_START,
  payload: city
})

export const fetchSucceededAction = ({ results }) => ({
  type: FETCH_SUCCEEDED,
  payload: results
})

export const fetchFailedAction = () => ({
  type: FETCH_FAILED
})