import { NOT_FOUND } from '../../../constants'
import { BAD_REQUEST } from '../../../constants/responseCodes'

const generateOwElementsByDay = ({ list = [] }) => {
  let newListArr = []
  const arrDays = []

  list.forEach(wElement => {
    const { main, wind, dt_txt, dt, weather } = wElement
    const [ day ] = dt_txt.split(' ')

    if (!arrDays.includes(day)) {
      const { temp, humidity } = main
      const { speed } = wind
      const { description } = weather[0]
  
      const weatherObj = {
        dt,
        temp,
        description,
        humidity,
        speed,
        day
      }
  
      newListArr = [...newListArr, weatherObj]
      arrDays.push(day)
    }
  })

  return newListArr
}

export const createOwResponse = response => {
  const { cod, list, message } = response
  const errorCodes = [NOT_FOUND, BAD_REQUEST]
  if (errorCodes.includes(cod)) {
    return {
      cod,
      message
    }
  }

  return generateOwElementsByDay({ list })
}