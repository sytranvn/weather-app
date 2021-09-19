import { render } from '@testing-library/react'
import { Time, Weather } from '../../constants'

import Mask from '../Mask'
describe('Mask', () => {
  test('renders snow day', () => {
    const { container } = render(<Mask weatherCode={Weather.SNOW} />)
    expect(container.firstChild).toHaveStyle({ 'background-color': 'snow', color: 'black' })
  })

  test('renders snow night', () => {
    const { container } = render(<Mask weatherCode={Weather.SNOW} time={Time.NIGHT} />)
    expect(container.firstChild).toHaveStyle({
      'background-color': 'lightslategray',
      color: 'black',
    })
  })

  test('renders light cloud night', () => {
    const { container } = render(<Mask weatherCode={Weather.LIGHT_CLOUD} time={Time.NIGHT} />)
    expect(container.firstChild).toHaveStyle({
      'background-color': 'lightslategray',
      color: 'white',
    })
  })
  test('renders light cloud day', () => {
    const { container } = render(<Mask weatherCode={Weather.LIGHT_CLOUD} />)
    expect(container.firstChild).toHaveStyle({
      'background-color': 'skyblue',
      color: 'white',
    })
  })

  test('renders showers night', () => {
    const { container } = render(<Mask weatherCode={Weather.SHOWERS} time={Time.NIGHT} />)
    expect(container.firstChild).toHaveStyle({
      'background-color': 'lightslategray',
      color: 'white',
    })
  })
  test('renders showers day', () => {
    const { container } = render(<Mask weatherCode={Weather.SHOWERS} />)
    expect(container.firstChild).toHaveStyle({
      'background-color': 'lightslategray',
      color: 'white',
    })
  })

  test('renders clear day', () => {
    const { container } = render(<Mask weatherCode={Weather.CLEAR} />)
    expect(container.firstChild).toHaveStyle({ 'background-color': 'skyblue', color: 'white' })
  })
  test('renders unkown weather day', () => {
    const { container } = render(<Mask weatherCode="uk" />)
    expect(container.firstChild).toHaveStyle({ 'background-color': 'skyblue', color: 'white' })
  })
})
