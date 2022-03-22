import { memo } from 'react'
import '../styles.scss'
import { generateDynamicStyle } from '../utils/generateDynamicStyle'

const WeatherOpt = ({ title, selected, handleCity }) => {
  const containerConfStyle = {
    boolean: selected,
    original: 'border-c-main txt-c-alt',
    alt: 'bg-main'
  }

  const textConfStyle = {
    boolean: selected,
    original: '',
    alt: 'txt-c-main font-bold'
  }

  const containerStyle = `p-l mh-l pointer ${generateDynamicStyle(containerConfStyle)} weather-opt`
  const textStyle = `font-m ${generateDynamicStyle(textConfStyle)}`

  return (
    <div onClick={handleCity(title)} className={containerStyle}>
      <p className={textStyle}> {title} </p>
    </div>
  )
}

export default memo(WeatherOpt)