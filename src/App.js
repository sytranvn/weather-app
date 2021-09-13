import { Container, Row, Col, Navbar } from 'react-bootstrap'
import logo from './logo.svg'

function App() {
  return (
    <Container fluid="md">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React logo"
        />
      </Navbar.Brand>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default App;
