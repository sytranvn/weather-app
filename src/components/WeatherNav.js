import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import WeatherSearch from "./WeatherSearch"


export default function WeatherNav() {
    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">YAWA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <WeatherSearch />
                        </Nav>
                        <Nav>
                        <Nav.Link href="https://www.metaweather.com/">Powered by MetaWeather</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

/*
            <Navbar expand="md" bg="dark" variant="dark">
                <WeatherSearch />
                <Navbar.Collapse>
                <Navbar.Brand href="/">YAWA</Navbar.Brand>
                <Nav.Link href="https://www.metaweather.com/">Powered by MetaWeather</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
*/