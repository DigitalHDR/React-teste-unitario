import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Deverá renderizar os elementos corretamente', () => {
    render(<App />)
    const texto = screen.queryByText('Hello,')
    expect(texto).toBeInTheDocument()
  
    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    expect(inputElement).toBeInTheDocument()
  
    const imageElement = screen.queryByRole('img')
    expect(imageElement).toBeInTheDocument()
  })
  
  it('devera encontrar a imagem com o texto alternativo correto', () => {
    render(<App />)
  
    const altTextImageElement = screen.queryByAltText('ilustração do pikachu')
    expect(altTextImageElement).toBeInTheDocument()
  })
  
  it('deverá pegar o input corretamente', () => {
    render(<App />)
    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    fireEvent.change(inputElement, {
      target: {
        value: 'Lucas',
      },
    })
  
    const valorDigitado = screen.queryByText('Lucas')
    expect(valorDigitado).toHaveTextContent('Lucas')
  })
  
  it('deverá renderizar corretamente o texto digitado', () => {
    render(<App />)
  
    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    fireEvent.change(inputElement, {
      target: {
        value: 'Lucas',
      },
    })
    expect(screen.queryByText('Lucas')).toHaveTextContent('Lucas')
    expect(screen.queryByText('Hello,')).toHaveTextContent('Hello, Lucas')
  })
  
})