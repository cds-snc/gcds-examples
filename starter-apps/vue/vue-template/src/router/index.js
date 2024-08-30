import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n, { defaultLocale } from '@/i18n/index.js'
import { forceRefresh } from '@/utils/refresh.js'
import { EN, FR, HOME } from '@/config/constants.js'
import NotFound from '@/views/NotFound.vue'

// TODO: If you use localized paths, configure them here
const localizedPaths = {
  home: {
    [EN]: '',
    [FR]: ''
  },
  about: {
    [EN]: 'about',
    [FR]: 'a-propos'
  },
  'about/about1': {
    [EN]: 'about/about1',
    [FR]: 'a-propos/a-propos1'
  },
  'about/about1/nested-in-about1-1': {
    [EN]: 'about/about1/nested-in-about1',
    [FR]: 'a-propos/a-propos1/imbriqué-dans-a-propos1'
  },
  'about/about1/nested-in-about1-2': {
    [EN]: 'about/about1/nested-in-about1-2',
    [FR]: 'a-propos/a-propos1/imbriqué-dans-a-propos1-2'
  },
  'about/about2': {
    [EN]: 'about/about2',
    [FR]: 'a-propos/a-propos2'
  },
  reportABug: {
    [EN]: 'report-a-bug',
    [FR]: 'signaler-un-bug'
  },
  'not-found': {
    [EN]: 'not-found',
    [FR]: 'non-trouve'
  }
}

// TODO: Add your routes here
const routes = [
  {
    path: '/',
    redirect: `/${defaultLocale}/`
  },
  {
    path: '/:locale?',
    children: [
      {
        path: '',
        name: HOME,
        component: HomeView,
        alias: ['', localizedPaths.home[EN], localizedPaths.home[FR]]
      },
      {
        path: localizedPaths.about[EN],
        name: 'about', // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About/AboutView.vue'),
        alias: localizedPaths.about[FR]
      },
      {
        path: localizedPaths['about/about1'][EN],
        name: 'about/about1',
        component: () => import('../views/About/About1.vue'),
        alias: localizedPaths['about/about1'][FR],
        meta: {
          i18nName: 'about1',
          parentPaths: {
            EN: [
              {
                path: localizedPaths.about[EN],
                name: localizedPaths.about[EN]
              }
            ],
            FR: [localizedPaths.about[FR]]
          }
        }
      },
      {
        path: localizedPaths.reportABug[EN],
        name: 'reportABug',
        component: () => import('../views/ReportABug.vue'),
        alias: localizedPaths.reportABug[FR]
      },
      {
        path: localizedPaths['not-found'][EN],
        name: 'not-found',
        component: NotFound,
        alias: [localizedPaths['not-found'][EN], localizedPaths['not-found'][FR]]
      },
      {
        path: ':notFound(.*)',
        name: 'not-found-redirect',
        redirect: { name: 'not-found' }
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
