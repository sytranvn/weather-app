import { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import StyledContainer from './components/StyledContainer'
import Footer from './components/Footer'
import WeatherNav from './components/Nav'
import GoTopBtn from './components/GoTopBtn'

const Locations = lazy(() => import('./containers/Locations'))
const Weather = lazy(() => import('./containers/Weather'))

function App(): JSX.Element {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <WeatherNav />
      <StyledContainer fluid="md">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/locations">
              <Locations />
            </Route>
            <Route exact path="/">
              <Weather />
            </Route>
            <Route exact path="/:woeid">
              <Weather />
            </Route>
          </Switch>
        </Suspense>
      </StyledContainer>
      <Footer />
      <GoTopBtn />
    </section>
  )
}

export default App
