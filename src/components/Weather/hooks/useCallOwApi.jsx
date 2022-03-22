import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStartAction } from '../../../store/actions'

const useCallOwApi = city => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStartAction({ city }))
  }, [city, dispatch])
}

export default useCallOwApi