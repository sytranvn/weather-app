import { ChangeEvent, useState, FormEvent, MouseEvent } from 'react'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function WeatherSearch() {
  const [search, setSearch] = useState('')
  const history = useHistory()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    history.push(`/locations?search=${search}`)
  }

  return (
    <Form onSubmit={handleSearch}>
      <InputGroup>
        <FormControl
          value={search}
          onChange={handleChange}
          type="search"
          placeholder="City"
          className="mr-2"
          aria-label="City"
        />
        <Button variant="outline-secondary" onClick={handleSearch} data-testid="search-btn">
          Search
        </Button>
      </InputGroup>
    </Form>
  )
}
