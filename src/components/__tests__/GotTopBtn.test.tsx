import { render, fireEvent } from '@testing-library/react'

import GoTopBtn from '../GoTopBtn'
describe('ScrollTop', () => {
  const setup = () => {
    const utils = render(
      <div style={{ height: '2000px' }}>
        <GoTopBtn />
      </div>
    )
    return utils
  }
  test('renders', async () => {
    const utils = setup()
    const btn = utils.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('invisible')

    document.body.scrollTop = 200
    fireEvent.scroll(document)
    expect(btn).toHaveClass('visible')

    fireEvent.click(btn)
    fireEvent.scroll(document)
    expect(btn).toHaveClass('invisible')
  })
})
