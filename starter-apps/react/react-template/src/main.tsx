import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from '@/routing/AppRoutes'

import '@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css'
import '@gcds-core/components-react/gcds.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
