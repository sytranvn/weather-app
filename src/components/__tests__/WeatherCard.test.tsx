import { render } from '@testing-library/react'
import WeatherCard from '../WeatherCard'

test('render WeatherCard', () => {
  const consolidatedWeather = {
    id: 6220163847290880,
    weather_state_name: 'Heavy Cloud',
    weather_state_abbr: 'hc',
    wind_direction_compass: 'NNE',
    created: '2021-09-18T06:59:43.871729Z',
    applicable_date: '2021-09-18',
    min_temp: 20.915,
    max_temp: 26.189999999999998,
    the_temp: 25.305,
    wind_speed: 4.95165536833161,
    wind_direction: 15.5,
    air_pressure: 1020,
    humidity: 74,
    visibility: 12.826654835759166,
    predictability: 71,
  }
  const location = {
    title: 'New York',
    location_type: 'City',
    woeid: 2459115,
    latt_long: '40.71455,-74.007118',
    timezone: 'US/Eastern',
  }
  const parent = {
    title: 'New York',
    location_type: 'Region / State / Province',
    woeid: 2347591,
    latt_long: '42.855350,-76.501671',
  }
  const { container, getByText } = render(
    <WeatherCard consolidatedWeather={consolidatedWeather} location={location} parent={parent} />
  )

  expect(getByText('Heavy Cloud')).toBeInTheDocument()
  expect(getByText('New York, New York')).toBeInTheDocument()
  expect(getByText('25°C')).toBeInTheDocument()

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      background-color: lightslategray;
      color: white;
    }

    <div
      class="mb-3 card"
      style="border-radius: 10px;"
    >
      <div
        class="bg-image ripple"
        style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
      >
        <img
          alt="night"
          class="w-100"
          src="/images/clear_night.png"
        />
        <div
          class="c0"
        >
          <div
            class="text-center text-white pt-2"
          >
            <p
              class="h4 mb-4"
            >
              Heavy Cloud
            </p>
            <p
              class="h6 mb-4"
            >
              New York
              , 
              New York
            </p>
            <p
              class="h6 mb-4"
            >
              September 18, 2021
            </p>
            <p
              class="display-5"
            >
              <strong>
                25
                °C
              </strong>
               
            </p>
          </div>
        </div>
      </div>
      <div
        class="card-body p-4 text-center"
      >
        <div
          class="d-flex justify-content-between mb-3"
        >
          <p
            class="h6 fw-normal"
          >
            Max
          </p>
          <p
            class="h6 fw-normal"
          >
            <i
              class="fas fa-sun pe-2"
            />
             
            26
            °C
          </p>
        </div>
        <div
          class="d-flex justify-content-between"
        >
          <p
            class="h6 fw-normal"
          >
            Min
          </p>
          <p
            class="h6 fw-normal"
          >
            <i
              class="fas fa-cloud pe-2"
            />
             
            21
            °C
          </p>
        </div>
      </div>
    </div>
  `)
})
