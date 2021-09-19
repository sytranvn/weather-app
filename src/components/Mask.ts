import styled from 'styled-components'
import { Time, Weather } from '../constants'

interface MaskProps {
  weatherCode: Weather | string
  time?: Time
}

export default styled.div`
  background-color: ${({ time = Time.DAY, weatherCode }: MaskProps) => {
    if (time === Time.NIGHT) {
      return 'lightslategray'
    }
    switch (weatherCode) {
      case Weather.SNOW:
        return 'snow'
      case Weather.CLEAR:
      case Weather.LIGHT_CLOUD:
        return 'skyblue'
      case Weather.HAIL:
      case Weather.HEAVY_CLOUD:
      case Weather.HEAVY_RAIN:
      case Weather.LIGHT_RAIN:
      case Weather.SHOWERS:
        return 'lightslategray'
      default:
        return 'skyblue'
    }
  }};
  color: ${({ weatherCode }: MaskProps) => {
    if (weatherCode === Weather.SNOW) return 'black'
    return 'white'
  }};
`
