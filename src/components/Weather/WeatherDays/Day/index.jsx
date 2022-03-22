import { capitalize } from '../../utils'
import Item from './Item'

const Day = ({ day, humidity, description, speed, temp }) => {

  return (
    <div className="day bg-main p-s m-l">
      <h3 className="mb-m txt-c-main"> {day} </h3>

      <p className="font-l mb-m txt-c-main txt-center font-bold"> {capitalize(description)} </p>

      <Item mb={'with'} title='Temperatura' data={`${temp}°`} />
      <Item mb={'with'} title='Humedad' data={`${humidity}%`} />
      <Item mb={'withOut'} title='Viento' data={`${speed} km/h`} />
    </div>
  )
}

export default Day