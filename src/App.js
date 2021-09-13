import { Container, Row, Col } from 'react-bootstrap'

import WeatherCard from './components/WeatherCard'
import WeatherNav from './components/WeatherNav'

function App() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <WeatherNav/>
      <Container fluid="md">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <WeatherCard />
          </Col>
          <Col>
            <WeatherCard />
          </Col>
          <Col>
            <WeatherCard />
          </Col>
          <Col>
            <WeatherCard />
          </Col>
          <Col>
            <WeatherCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
