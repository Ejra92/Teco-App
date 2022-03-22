import useCallOwApi from '../hooks/useCallOwApi'
import useDaysData from '../hooks/useDaysData'
import Day from './Day'

const WeatherDays = () => {
  const {
    city,
    results,
    message,
    currentCityData
  } = useDaysData()
  useCallOwApi(city)

  return (
    <section className="dflex dflex-around dflex-d-column dflex-auto w-100">
      {!message && <h2 className="font-xl txt-c-alt">Temperatura de {city}</h2>}
      {message && <p className="font-xl txt-c-alt font-bold"> {message} </p>}

      <div className="dflex dflex-around w-100">
        {currentCityData && (
          <Day
            temp={currentCityData.temp}
            description={currentCityData.description}
            humidity={currentCityData.humidity}
            speed={currentCityData.speed}
            day={'Hoy'}
          />
        )}
      </div>

      {!message && (
        <p className="font-l txt-c-alt font-bold mb-s">
          Pronostico siguientes 5 dias
        </p>
      )}

      <div className="dflex dflex-center w-100 weather-items-container overflow-scroll">
        {results?.slice(1, 6)?.map(weather => {
          return (
            <Day
              key={weather.dt}
              temp={weather.temp}
              description={weather.description}
              humidity={weather.humidity}
              speed={weather.speed}
              day={weather.day}
            />
          )
        })}
      </div>
    </section>
  )
}

export default WeatherDays