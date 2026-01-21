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
    fireEvent.change(search, { target: { value: 'n1' } })

    expect(screen.getByText(/item\(ns\)/i).textContent).toMatch(/1 item\(ns\)|2 item\(ns\)|3 item\(ns\)/)
    expect(screen.getByText('Colher de Pau - N1')).toBeInTheDocument()
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

    fireEvent.click(screen.getByText('Colher de Pau - N2'))
    expect(screen.getAllByRole('button', { name: 'Fechar' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Colher de Pau - N2').length).toBeGreaterThanOrEqual(2)
    vi.useRealTimers()
  })

  it('ordena colheres por N', async () => {
    vi.useFakeTimers()
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>,
    )

    await act(async () => {
      vi.advanceTimersByTime(300)
    })

    const selects = screen.getAllByRole('combobox')
    fireEvent.change(selects[0], { target: { value: 'colheres' } })

    const n1 = screen.getByText('Colher de Pau - N1')
    const n2 = screen.getByText('Colher de Pau - N2')
    const n3 = screen.getByText('Colher de pau - N3')
    const n4 = screen.getByText('Colher de Pau - N4')
    const n5 = screen.getByText('Colher de Pau - N5')

    expect(n1.compareDocumentPosition(n2) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(n2.compareDocumentPosition(n3) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(n3.compareDocumentPosition(n4) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(n4.compareDocumentPosition(n5) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()

    vi.useRealTimers()
  })
})

