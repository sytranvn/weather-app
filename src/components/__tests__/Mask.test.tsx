import { render } from '@testing-library/react'

import Mask from '../Mask'
test('renders class', () => {
  const { container } = render(<Mask />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      background-color: rgba(0,0,0,.45);
    }

    <div
      class="c0"
    />
  `)
})
