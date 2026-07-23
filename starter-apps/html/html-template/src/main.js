import '@gcds-core/components/dist/gcds/gcds.esm.js'

import './style.css'
import { localeMeta, resources } from './i18n/resources.js'
import { EN, FR, defaultLocale } from './routing/constants.js'
import {
  getLocalizedPath,
  getPathInLocale,
  getRouteContext,
  getRouteKeyFromPath,
  isAppLocale
} from './routing/localizedRoutes.js'
import { buildGithubIssueUrl, initialReportBugFormData } from './utils/githubIssue.js'

const DATE_MODIFIED = '2024-09-10'
const app = document.querySelector('#app')

const state = {
  formData: { ...initialReportBugFormData },
  submitted: false
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function t(locale, key) {
  return key.split('.').reduce((value, part) => value?.[part], resources[locale].translation)
}

function getOtherLocale(locale) {
  return locale === EN ? FR : EN
}

function setDocumentLanguage(locale) {
  const meta = localeMeta[locale]

  document.documentElement.lang = locale
  document.documentElement.dir = meta.dir
}

function pageWithDateModified(content) {
  return `
    ${content}
    <gcds-date-modified>${DATE_MODIFIED}</gcds-date-modified>
  `
}

function renderHome(locale) {
  return pageWithDateModified(`
    <section>
      <gcds-heading tag="h1">${escapeHtml(t(locale, 'homePage.heading'))}</gcds-heading>
      <gcds-text>${escapeHtml(t(locale, 'homePage.paragraph'))}</gcds-text>
      <gcds-text>${escapeHtml(t(locale, 'homePage.paragraph2'))}</gcds-text>
      <gcds-text>${escapeHtml(t(locale, 'homePage.paragraph3'))}</gcds-text>
    </section>
  `)
}

function renderAbout(locale) {
  return pageWithDateModified(`
    <section>
      <gcds-heading tag="h1">${escapeHtml(t(locale, 'aboutPage.heading'))}</gcds-heading>
      <gcds-text>${escapeHtml(t(locale, 'aboutPage.intro'))}</gcds-text>
      <gcds-link href="${getLocalizedPath('aboutTopic', locale)}">
        ${escapeHtml(t(locale, 'aboutPage.aboutTopic.heading'))}
      </gcds-link>
    </section>
  `)
}

function renderAboutTopic(locale) {
  return pageWithDateModified(`
    <section>
      <gcds-heading tag="h1">${escapeHtml(t(locale, 'aboutPage.aboutTopic.heading'))}</gcds-heading>
      <gcds-text>${escapeHtml(t(locale, 'aboutPage.aboutTopic.intro'))}</gcds-text>
    </section>
  `)
}

function renderNotFound(locale) {
  return pageWithDateModified(`
    <section>
      <gcds-heading tag="h1">${escapeHtml(t(locale, 'notFoundPage.heading'))}</gcds-heading>
      <gcds-text>${escapeHtml(t(locale, 'notFoundPage.intro'))}</gcds-text>
    </section>
  `)
}

function renderInput(locale, name, labelKey, hintKey, options = {}) {
  const { id = name, required = false, type = 'text', placeholderKey } = options

  return `
    <gcds-input
      hint="${escapeHtml(t(locale, hintKey))}"
      input-id="${id}"
      label="${escapeHtml(t(locale, labelKey))}"
      name="${name}"
      ${placeholderKey ? `placeholder="${escapeHtml(t(locale, placeholderKey))}"` : ''}
      ${required ? 'required' : ''}
      type="${type}"
      validate-on="submit"
      value="${escapeHtml(state.formData[name])}"
    ></gcds-input>
  `
}

function renderTextarea(locale, name, labelKey, hintKey, options = {}) {
  const { id = name, required = false } = options

  return `
    <gcds-textarea
      hint="${escapeHtml(t(locale, hintKey))}"
      label="${escapeHtml(t(locale, labelKey))}"
      name="${name}"
      ${required ? 'required' : ''}
      textarea-id="${id}"
      validate-on="submit"
      value="${escapeHtml(state.formData[name])}"
    ></gcds-textarea>
  `
}

function renderReportForm(locale) {
  return `
    <form name="bugReportForm" novalidate>
      <gcds-error-summary listen></gcds-error-summary>

      <!-- TODO: This form is a starter template.
        Add/remove fields to match your issue workflow and keep name/input-id/textarea-id stable for tests. -->
      ${renderInput(locale, 'version', 'reportABugPage.form.versionNumber', 'reportABugPage.form.versionNumberHint', { required: true })}
      ${renderInput(locale, 'title', 'reportABugPage.form.title', 'reportABugPage.form.titleHint', {
        required: true,
        placeholderKey: 'reportABugPage.form.titlePlaceholder'
      })}
      ${renderTextarea(locale, 'currentBehavior', 'reportABugPage.form.currentBehavior', 'reportABugPage.form.currentBehaviorHint')}
      ${renderTextarea(locale, 'expectedBehavior', 'reportABugPage.form.expectedBehavior', 'reportABugPage.form.expectedBehaviorHint', { required: true })}
      ${renderTextarea(locale, 'systemInfo', 'reportABugPage.form.systemInfo', 'reportABugPage.form.systemInfoHint', { required: true })}
      ${renderTextarea(locale, 'stepsToReproduce', 'reportABugPage.form.stepsToReproduce', 'reportABugPage.form.stepsToReproduceHint', { required: true })}
      ${renderInput(
        locale,
        'codeReproductionUrl',
        'reportABugPage.form.codeReproductionURL',
        'reportABugPage.form.codeReproductionURLHint',
        {
          required: true,
          type: 'url'
        }
      )}
      ${renderTextarea(locale, 'additionalInfo', 'reportABugPage.form.additionalInformation', 'reportABugPage.form.additionalInformationHint')}

      <gcds-button type="submit">${escapeHtml(t(locale, 'reportABugPage.form.submit'))}</gcds-button>
    </form>
  `
}

function renderConfirmation(locale) {
  const fieldKeys = [
    ['version', 'reportABugPage.form.versionNumber'],
    ['title', 'reportABugPage.form.title'],
    ['currentBehavior', 'reportABugPage.form.currentBehavior'],
    ['expectedBehavior', 'reportABugPage.form.expectedBehavior'],
    ['systemInfo', 'reportABugPage.form.systemInfo'],
    ['stepsToReproduce', 'reportABugPage.form.stepsToReproduce'],
    ['codeReproductionUrl', 'reportABugPage.form.codeReproductionURL'],
    ['additionalInfo', 'reportABugPage.form.additionalInformation']
  ]

  const values = fieldKeys
    .map(
      ([name, labelKey]) => `
        <gcds-text>
          <strong>${escapeHtml(t(locale, labelKey))}:</strong>
          ${escapeHtml(state.formData[name])}
        </gcds-text>
      `
    )
    .join('')

  return `
    <div>
      <gcds-heading tag="h2">${escapeHtml(t(locale, 'reportABugPage.form.confirmation'))}</gcds-heading>
      <div class="confirmation-list">${values}</div>

      <section>
        <gcds-heading tag="h2">${escapeHtml(t(locale, 'reportABugPage.openGithub'))}</gcds-heading>
        <gcds-button
          href="${escapeHtml(buildGithubIssueUrl(state.formData))}"
          target="_blank"
          type="link"
        >
          ${escapeHtml(t(locale, 'reportABugPage.openGithubButton'))}
        </gcds-button>
      </section>
    </div>
  `
}

function renderReportABug(locale) {
  return pageWithDateModified(`
    <section>
      <gcds-heading tag="h1">${escapeHtml(t(locale, 'reportABugPage.heading'))}</gcds-heading>
      <gcds-text>${escapeHtml(t(locale, 'reportABugPage.intro'))}</gcds-text>
    </section>
    ${state.submitted ? renderConfirmation(locale) : renderReportForm(locale)}
  `)
}

function renderPage(routeKey, locale) {
  switch (routeKey) {
    case 'home':
      return renderHome(locale)
    case 'about':
      return renderAbout(locale)
    case 'aboutTopic':
      return renderAboutTopic(locale)
    case 'reportABug':
      return renderReportABug(locale)
    default:
      return renderNotFound(locale)
  }
}

function renderCurrentAttributes(currentRouteKey, routeKey) {
  return currentRouteKey === routeKey ? ' current' : ''
}

function renderBreadcrumbs(currentRouteKey, locale) {
  if (currentRouteKey === 'home') {
    return ''
  }

  const homeCrumb = `
    <gcds-breadcrumbs-item href="${getLocalizedPath('home', locale)}">
      ${escapeHtml(t(locale, 'home'))}
    </gcds-breadcrumbs-item>
  `

  if (currentRouteKey !== 'aboutTopic') {
    return homeCrumb
  }

  return `
    ${homeCrumb}
    <gcds-breadcrumbs-item href="${getLocalizedPath('about', locale)}">
      ${escapeHtml(t(locale, 'about'))}
    </gcds-breadcrumbs-item>
  `
}

function renderApp(routeKey, locale) {
  const currentRouteKey = routeKey ?? 'home'
  const otherLangPath = getPathInLocale(window.location.pathname, getOtherLocale(locale))

  // TODO: Replace these sample navigation links with your project routes.
  // Add a matching route key/slug mapping so locale switching stays consistent.
  const navElements = [
    {
      routeKey: 'about',
      label: t(locale, 'about')
    },
    {
      routeKey: 'reportABug',
      label: t(locale, 'reportABug')
    }
  ]

  app.innerHTML = `
    <!-- TODO: Keep lang-href pointing at an equivalent page in the other locale. -->
    <gcds-header lang-href="${otherLangPath}" skip-to-href="#main-content">
      <!-- TODO: By default gcds-search submits to the canada.ca global search and
        leaves this app. Set action to your own search results route before shipping
        or remove this element if your app has no search. -->
      <gcds-search slot="search"></gcds-search>

      <gcds-top-nav alignment="end" label="${escapeHtml(t(locale, 'topNavLabel'))}" slot="menu">
        <gcds-nav-link
          href="${getLocalizedPath('home', locale)}"
          slot="home"
          ${renderCurrentAttributes(currentRouteKey, 'home')}
        >
          ${escapeHtml(t(locale, 'homeNavLink'))}
        </gcds-nav-link>
        ${navElements
          .map(
            (navElement) => `
              <gcds-nav-link
                href="${getLocalizedPath(navElement.routeKey, locale)}"
                ${renderCurrentAttributes(currentRouteKey, navElement.routeKey)}
              >
                ${escapeHtml(navElement.label)}
              </gcds-nav-link>
            `
          )
          .join('')}
      </gcds-top-nav>

      <gcds-breadcrumbs slot="breadcrumb">
        <!-- TODO: This starter breadcrumb logic is intentionally simple.
          Consider deriving breadcrumbs from route metadata as pages scale. -->
        ${renderBreadcrumbs(currentRouteKey, locale)}
      </gcds-breadcrumbs>
    </gcds-header>

    <gcds-container id="main-content" layout="page" tag="main">
      ${renderPage(routeKey, locale)}
    </gcds-container>

    <gcds-footer display="full"></gcds-footer>
  `

  bindFormEvents()
}

function saveFormElementValue(element) {
  if (element.name && Object.hasOwn(state.formData, element.name)) {
    state.formData[element.name] = element.value ?? ''
  }
}

async function validateReportForm(form) {
  const fields = [...form.querySelectorAll('gcds-input, gcds-textarea')]

  await Promise.all(fields.map((field) => field.validate?.()))

  const validity = await Promise.all(
    fields.map(async (field) => {
      saveFormElementValue(field)
      return field.checkValidity ? field.checkValidity() : true
    })
  )

  return validity.every(Boolean)
}

function bindFormEvents() {
  const form = app.querySelector('form[name="bugReportForm"]')

  if (!form) {
    return
  }

  form.addEventListener('gcdsInput', (event) => {
    saveFormElementValue(event.target)
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleReportSubmit(form)
  })

  const submitButton = form.querySelector('gcds-button[type="submit"]')
  submitButton?.addEventListener('gcdsClick', () => {
    handleReportSubmit(form)
  })
}

async function handleReportSubmit(form) {
  if (!(await validateReportForm(form))) {
    return
  }

  state.submitted = true
  render()
}

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname)
  render()
  window.scrollTo({ top: 0 })
}

function normalizeInitialPath() {
  if (window.location.pathname === '/') {
    window.history.replaceState({}, '', getLocalizedPath('home', defaultLocale))
    return
  }

  const { locale } = getRouteContext(window.location.pathname)
  if (!isAppLocale(locale)) {
    window.history.replaceState({}, '', getLocalizedPath('home', defaultLocale))
  }
}

function render() {
  normalizeInitialPath()

  const { locale = defaultLocale, routeKey } = getRouteContext(window.location.pathname)
  setDocumentLanguage(locale)
  renderApp(routeKey, locale)
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a, gcds-link, gcds-nav-link, gcds-breadcrumbs-item')

  if (!link) {
    return
  }

  const href = link.getAttribute('href')
  const target = link.getAttribute('target')

  if (!href || target === '_blank' || href.startsWith('http')) {
    return
  }

  event.preventDefault()
  state.submitted = getRouteKeyFromPath(href) === 'reportABug' ? state.submitted : false
  navigateTo(href)
})

window.addEventListener('popstate', render)
document.documentElement.classList.add('hydrated')
render()
