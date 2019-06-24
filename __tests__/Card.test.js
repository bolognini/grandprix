import { render } from '@testing-library/react'
import Card from '../components/Card'
import 'jest-dom/extend-expect'

describe('Card page', () => {
  it('Renders without crashing', () => {
    const { container } = render(<Card />)

    expect(container).toBeInTheDocument()
  })
})