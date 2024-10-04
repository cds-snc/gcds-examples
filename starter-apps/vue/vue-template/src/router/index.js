import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import i18n, { defaultLocale } from '@/i18n/index.js'
import { forceRefresh } from '@/utils/refresh.js'
import { EN, FR, HOME } from '@/config/constants.js'
import NotFound from '@/views/NotFound.vue'

// TODO: If you use localized paths, here is an example of how to configure them
const localizedPaths = {
  home: {
    [EN]: '',
    [FR]: ''
  },
  about: {
    [EN]: 'about',
    [FR]: 'a-propos'
  },
  'about/topic': {
    [EN]: 'about/topic',
    [FR]: 'a-propos/sujet'
  },
  reportABug: {
    [EN]: 'report-a-bug',
    [FR]: 'signaler-un-bug'
  }
}

// TODO: Add your routes here
const routes = [
  {
    path: '/',
    redirect: `/${defaultLocale}/`
  },
  {
    path: '/:locale',
    children: [
      {
        path: '',
        name: HOME,
        component: Home,
        alias: ['', localizedPaths.home[EN], localizedPaths.home[FR]]
      },
      {
        path: localizedPaths.about[EN],
        name: 'about', // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About/About.vue'),
        alias: localizedPaths.about[FR]
      },
      {
        path: localizedPaths['about/topic'][EN],
        name: 'about/topic',
        component: () => import('../views/About/AboutTopic.vue'),
        alias: localizedPaths['about/topic'][FR]
      },
      {
        path: localizedPaths.reportABug[EN],
        name: 'reportABug',
        component: () => import('../views/ReportABug.vue'),
        alias: localizedPaths.reportABug[FR]
      },
      {
        path: ':notFound(.+)+',
        name: 'not-found-catch-all',
        component: NotFound
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Load the messages for the new locale when the locale changes
router.beforeEach(async (to, from) => {
  const newLocale = to.params.locale
  const prevLocale = from.params.locale

  // Do nothing if the locale hasn't changed
  if (newLocale === prevLocale) {
    return
  }

  await i18n.loadMessagesFor(newLocale)
  i18n.setLocale(newLocale)

  forceRefresh()
})

/**
 * Get the localized path for a given path and locale
 * @param {string} path - The path to localize
 * @param {string} locale - The locale to use. Defaults to the current locale
 * @returns {string} The localized path. Example: if /en/report-a-bug, return /fr/signaler-un-bug
 */
export function getLocalizedPath(path, locale = i18n.i18n.global.locale.value) {
  if (!localizedPaths[path]) {
    return path
  }

  return `/${locale}/${localizedPaths[path][locale]}`
}

export default router
