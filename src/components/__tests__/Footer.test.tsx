import { render } from '@testing-library/react'

import Footer from '../Footer'
test('renders footer with domain name', () => {
  const { container, getByText } = render(<Footer />)
  expect(getByText(`sytranvn.dev`)).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <footer
      class="bg-light text-center text-lg-start"
    >
      <div
        class="text-center p-3"
      >
        © 
        2021
         Copyright:
        <a
          class="text-dark"
          href="https://sytranvn.dev/"
        >
          sytranvn.dev
        </a>
      </div>
    </footer>
  `)
})
