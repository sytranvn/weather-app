import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Mask from '../Mask'
test('renders class', () => {
  const { container } = render(<Mask />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="sc-bdfBQB dmWvDr"
    />
  `)
})
