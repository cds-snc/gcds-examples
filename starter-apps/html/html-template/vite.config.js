import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

function cleanUrlDirectoryFallback() {
  return {
    name: 'clean-url-directory-fallback',
    configureServer(server) {
      server.middlewares.use(rewriteCleanUrlToDirectoryIndex)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewriteCleanUrlToDirectoryIndex)
    }
  }
}

function rewriteCleanUrlToDirectoryIndex(request, _response, next) {
  const pathname = request.url?.split('?')[0]

  if (!pathname || pathname.includes('.') || pathname.endsWith('/')) {
    next()
    return
  }

  if (existsSync(resolve(rootDir, `.${pathname}/index.html`))) {
    request.url = request.url.replace(pathname, `${pathname}/`)
  }

  next()
}

export default defineConfig({
  plugins: [cleanUrlDirectoryFallback()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        enHome: resolve(rootDir, 'en/index.html'),
        enAbout: resolve(rootDir, 'en/about/index.html'),
        enAboutTopic: resolve(rootDir, 'en/about/topic/index.html'),
        enReportABug: resolve(rootDir, 'en/report-a-bug/index.html'),
        frHome: resolve(rootDir, 'fr/index.html'),
        frAbout: resolve(rootDir, 'fr/a-propos/index.html'),
        frAboutTopic: resolve(rootDir, 'fr/a-propos/sujet/index.html'),
        frReportABug: resolve(rootDir, 'fr/signaler-un-bug/index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
