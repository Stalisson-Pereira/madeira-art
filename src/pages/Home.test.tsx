import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Home from '@/pages/Home'

describe('Home', () => {
  it('renderiza hero e CTAs principais', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(
      screen.getByText('Artesanato em madeira que transforma o cotidiano em ritual'),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ver catálogo/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Personalizar uma peça/i })).toBeInTheDocument()
  })
})

