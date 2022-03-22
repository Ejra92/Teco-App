import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryAction } from '../../../store/actions'


const useOptData = () => {
  const city = useSelector(state => state.city)
  const dispatch = useDispatch()
  const handleCity = useCallback((title) => () => {
    dispatch(setCountryAction({ city: title }))
  }, [dispatch])

  return {
    city,
    handleCity
  }
}

export default useOptData