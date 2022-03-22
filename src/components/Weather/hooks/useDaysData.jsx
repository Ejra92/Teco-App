import { useSelector } from 'react-redux'

const useDaysData = () => {
  const { city, results, error, loading } = useSelector(state => state)
  const currentCityData = results?.[0]

  let message = ''
  if (loading) message = 'Cargando'
  if (error) message = 'Ha ocurrido un error al cargar la ciudad, verifique su conexion'

  return {
    city,
    results,
    message,
    currentCityData
  }
}

export default useDaysData