import { app } from '../../config/app'
import { owBaseUrl } from '../../constants'
import { createOwResponse } from './utils'

const { apiKeys } = app

export const getWeatherByCity = async config => {
  const { city } = config

  try {
    const url = `${owBaseUrl}?q=${city}&appid=${apiKeys.ow}&units=metric&lang=es`

    let response = await fetch(url)
    response = await response.json()
    response = createOwResponse(response)

    return response
  } catch (error) {
    throw new Error(error)
  }
}