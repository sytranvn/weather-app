import { Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function WeatherSearch() {
    return (
        <Form>
            <InputGroup>
                <FormControl
                    type="search"
                    placeholder="City"
                    className="mr-2"
                    aria-label="City"
                />
                <Button variant="primary" aria-label="search"><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup>
        </Form>)
}