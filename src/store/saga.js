import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_START } from './types'
import { fetchFailedAction, fetchSucceededAction } from './actions'
import { getWeatherByCity } from '../services/api'

function* fetchUser({ payload }) {
   try {
      const results = yield call(getWeatherByCity, { city: payload })

      if (results?.cod) {
         yield put(fetchFailedAction())
         return
      }

      yield put(fetchSucceededAction({ results }))
   } catch {
      yield put(fetchFailedAction())
   }
}

export function* saga() {
  yield takeLatest(FETCH_START, fetchUser)
}