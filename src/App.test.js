import { render, screen } from '@testing-library/react'
import App from './App'

test('Deverá renderizar os elementos corretamente', () => {
  render(<App />)
  const texto = screen.queryByText('Hello,')
  expect(texto).toBeInTheDocument()

  const inputElement = screen.queryByPlaceholderText('digite seu nome')
  expect(inputElement).toBeInTheDocument()

  const imageElement = screen.queryByRole('img')
  expect(imageElement).toBeInTheDocument()
})

test('devera encontrar a imagem com o texto alternativo correto', () => {
  render(<App />)

  const altTextImageElement = screen.queryByAltText('ilustração do pikachu')
  expect(altTextImageElement).toBeInTheDocument()
})