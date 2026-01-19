import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Produtos from '@/pages/Produtos'
import { MemoryRouter } from 'react-router-dom'

describe('Produtos', () => {
  afterEach(() => cleanup())

  it('filtra por busca', async () => {
    vi.useFakeTimers()
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>,
    )

    await act(async () => {
      vi.advanceTimersByTime(300)
    })

    expect(screen.getByText(/\d+ item\(ns\)/i)).toBeInTheDocument()

    const search = screen.getByLabelText('Buscar produtos')
    fireEvent.change(search, { target: { value: 'grande' } })

    expect(screen.getByText(/item\(ns\)/i).textContent).toMatch(/1 item\(ns\)|2 item\(ns\)|3 item\(ns\)/)
    expect(screen.getByText(/Colher de Pau — Grande/i)).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('abre o detalhe rápido ao clicar no card', async () => {
    vi.useFakeTimers()
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>,
    )

    await act(async () => {
      vi.advanceTimersByTime(300)
    })

    fireEvent.click(screen.getByText('Colher de Pau — Pequena (25 cm)'))
    expect(screen.getAllByRole('button', { name: 'Fechar' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Colher de Pau — Pequena (25 cm)').length).toBeGreaterThanOrEqual(2)
    vi.useRealTimers()
  })
})

