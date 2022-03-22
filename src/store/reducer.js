import { FETCH_FAILED, FETCH_START, FETCH_SUCCEEDED, SET_COUNTRY } from './types'

const initialState = {
  city: 'Buenos aires',
  results: [],
  loading: false,
  error: false,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  
  switch (type) {
    case SET_COUNTRY:
      return { ...state, city: payload, error: false, loading: false }

    case FETCH_START:
      return { ...state, results: [], error: false, loading: true }

    case FETCH_SUCCEEDED:
      return { ...state, results: [...state.results, ...payload], error: false, loading: false }

    case FETCH_FAILED:
      return { ...state, results: [], error: true, loading: false  }
  
    default:
      return state
  }
}