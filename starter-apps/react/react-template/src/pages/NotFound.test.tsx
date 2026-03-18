import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import NotFoundPage from '@/pages/NotFound'

describe('NotFoundPage', () => {
  it('renders not found content', () => {
    render(<NotFoundPage />)

    expect(screen.getByText('Page could not be found')).toBeInTheDocument()
    expect(screen.getByText('Check you’ve entered the correct web address.')).toBeInTheDocument()
  })
})
