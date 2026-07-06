import type { ReactNode } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ReportABugPage from '@/pages/ReportABug'

vi.mock('@gcds-core/components-react', () => {
  return {
    GcdsHeading: ({ children }: { children: ReactNode }) => <h1>{children}</h1>,
    GcdsText: ({ children }: { children: ReactNode }) => <p>{children}</p>,
    GcdsDateModified: ({ children }: { children: ReactNode }) => <span>{children}</span>,
    GcdsErrorSummary: () => <div data-testid="error-summary" />,
    GcdsInput: (props: any) => (
      <input
        aria-label={props.label}
        name={props.name}
        onInput={(event) =>
          props.onGcdsInput?.({ target: event.currentTarget, preventDefault: () => undefined })
        }
        required={props.required}
        type={props.type ?? 'text'}
      />
    ),
    GcdsTextarea: (props: any) => (
      <textarea
        aria-label={props.label}
        name={props.name}
        onInput={(event) =>
          props.onGcdsInput?.({ target: event.currentTarget, preventDefault: () => undefined })
        }
        required={props.required}
      />
    ),
    GcdsButton: (props: any) => {
      if (props.href) {
        return (
          <a href={props.href} target={props.target}>
            {props.children}
          </a>
        )
      }

      return <button type={props.type}>{props.children}</button>
    }
  }
})

describe('ReportABugPage', () => {
  it('shows confirmation after a valid submission', () => {
    render(<ReportABugPage />)

    fireEvent.input(screen.getByLabelText('GC Design System Components Package and Version'), {
      target: { value: '1.0.0' }
    })
    fireEvent.input(screen.getByLabelText('Title'), {
      target: { value: 'bug title' }
    })
    fireEvent.input(screen.getByLabelText('Expected Behavior'), {
      target: { value: 'expected behavior' }
    })
    fireEvent.input(screen.getByLabelText('System Info'), {
      target: { value: 'system info' }
    })
    fireEvent.input(screen.getByLabelText('Steps to Reproduce'), {
      target: { value: 'step one' }
    })
    fireEvent.input(screen.getByLabelText('Code Reproduction URL'), {
      target: { value: 'https://example.com/repro' }
    })

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Confirmation')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Open issue on Github' })).toBeInTheDocument()
  })
})
