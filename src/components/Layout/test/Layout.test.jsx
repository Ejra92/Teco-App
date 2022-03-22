import { render, screen } from '@testing-library/react'
import Layout from '..'
import Header from '../Header'
import Footer from '../Footer'

describe('Layout', () => {
  it('Header Behavior', () => {
    render(<Header />)

    const element = screen.getByText(/teco weather app/i)

    expect(element).toBeInTheDocument()
  })

  it('Footer Behavior', () => {
    render(<Footer />)

    const element = screen.getByText(/powered by ejra92/i)

    expect(element).toBeInTheDocument()
  })

  it('Layout integration with Header and Footer components', () => {
    render(<Layout />)

    const headerElement = screen.getByText(/teco weather app/i)
    const footerElement = screen.getByText(/powered by ejra92/i)

    expect(headerElement).toBeInTheDocument()
    expect(footerElement).toBeInTheDocument()
  });
})