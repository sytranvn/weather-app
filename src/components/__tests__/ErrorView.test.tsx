import { render } from '@testing-library/react'

import ErrorView from '../ErrorView'
test('renders error message', () => {
  const { getByText } = render(<ErrorView message="Sorry!" code={500} />)
  expect(getByText('Sorry!')).toBeInTheDocument()
  expect(getByText('500')).toBeInTheDocument()
})
