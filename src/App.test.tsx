import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom'

import App from './App'

test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  const { getByText, container } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  await waitFor(() => expect(getByText('Loading weather forcast...')).toBeInTheDocument())
  expect(screen.getByText(/YAWA/i)).toBeInTheDocument()

  userEvent.type(screen.getByPlaceholderText('City'), 'New York')
  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/search/i), leftClick)

  expect(history.entries[1]).toMatchObject({
    pathname: '/locations',
    search: '?search=New York',
  })
})
