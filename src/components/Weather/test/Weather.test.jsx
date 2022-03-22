import { fireEvent, render, screen } from '@testing-library/react'
import { resultsTestExample } from '../../../store/utils'
import Day from '../WeatherDays/Day'
import WeatherOpt from '../WeatherOpts/WeatherOpt'

describe('Weather', () => {
  describe('WeatherDays Components Behavior', () => {
    it('Should Render Day', () => {
      const {
        temp,
        description,
        humidity,
        speed,
        day
      } = resultsTestExample[0]

      render(
        <Day
          temp={temp}
          description={description}
          humidity={humidity}
          speed={speed}
          day={day}
        />
      )

      expect(screen.getByText(/33.64/)).toBeInTheDocument()
      expect(screen.getByText(/algo de nubes/i)).toBeInTheDocument()
      expect(screen.getByText(/31/i)).toBeInTheDocument()
      expect(screen.getByText(/6.07/i)).toBeInTheDocument()
      expect(screen.getByText(/2022-03-23/i)).toBeInTheDocument()
    })
  })

  describe('WeatherOpts Components Behavior', () => {
    it('WeatherOpt Should be render', () => {
      const handleCity = jest.fn()

      render(
        <WeatherOpt
          title={'Argentina'}
          handleCity={handleCity}
        />
      )

      const title = screen.getByText(/argentina/i)
      expect(title).toBeInTheDocument()
      fireEvent.click(title)
      expect(handleCity).toBeCalled()
    })
  })
})