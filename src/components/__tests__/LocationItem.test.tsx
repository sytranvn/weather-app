import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import LocationItem from '../LocationItem'
test('renders error message', async () => {
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <LocationItem location={{ woeid: 123, title: 'Somewhere' }} />
    </BrowserRouter>
  )
  expect(getByText('Somewhere')).toBeInTheDocument()
  expect(getByRole('link')).toHaveAttribute('href', '/123')
})
