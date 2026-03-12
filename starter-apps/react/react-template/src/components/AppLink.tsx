import { type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { GcdsBreadcrumbsItem, GcdsLink, GcdsNavLink } from '@gcds-core/components-react'

type LinkVariant = 'link' | 'nav' | 'breadcrumb'

type AppLinkProps = {
  children: ReactNode
  to: string
  variant?: LinkVariant
  current?: boolean
  external?: boolean
  inactiveClass?: string
  slot?: string
}

function hasModifierKey(event: React.MouseEvent<HTMLElement>): boolean {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
}

export default function AppLink({
  children,
  to,
  variant = 'link',
  current = false,
  external = false,
  inactiveClass,
  slot
}: AppLinkProps) {
  const navigate = useNavigate()

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (external || hasModifierKey(event) || event.button !== 0) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  if (variant === 'nav') {
    return (
      <GcdsNavLink
        className={inactiveClass}
        current={current}
        href={to}
        onClick={onClick}
        slot={slot}
      >
        {children}
      </GcdsNavLink>
    )
  }

  if (variant === 'breadcrumb') {
    return (
      <GcdsBreadcrumbsItem href={to} onClick={onClick}>
        {children}
      </GcdsBreadcrumbsItem>
    )
  }

  return (
    <GcdsLink className={inactiveClass} external={external} href={to} onClick={onClick}>
      {children}
    </GcdsLink>
  )
}
