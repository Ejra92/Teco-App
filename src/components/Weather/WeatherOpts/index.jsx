import WeatherOpt from './WeatherOpt'
import { defaultCities } from '../utils'
import useOptData from '../hooks/useOptData'

const WeatherOpts = () => {
  const {
    city,
    handleCity
  } = useOptData()

  return (
    <section className="dflex dflex-center ph-m w-100 weather-opts-section overflow-scroll">
      {defaultCities.map(({id, title}) => {
        const selected = city.toLowerCase() === title.toLocaleLowerCase()

        return (
          <WeatherOpt
            key={id}
            title={title}
            selected={selected}
            handleCity={handleCity}
          />
        )
      })}
    </section>
  )
}

export default WeatherOpts