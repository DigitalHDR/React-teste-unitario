import { render, screen } from '@testing-library/react'
import App from './App'

test('Deverá renderizar os elementos corretamente', () => {
  render(<App />)
  const texto = screen.queryByText('Hello,')
  expect(texto).toBeInTheDocument()

  const inputElemente = screen.queryByPlaceholderText('digite seu nome')
  expect(inputElemente).toBeInTheDocument()
})