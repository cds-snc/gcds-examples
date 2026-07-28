import { buildGithubIssueUrl, initialReportBugFormData } from './utils/githubIssue.js'

const form = document.querySelector('[data-report-bug-form]')
const confirmation = document.querySelector('[data-report-bug-confirmation]')
const summary = document.querySelector('[data-report-bug-summary]')
const issueLink = document.querySelector('[data-report-bug-issue-link]')
let isSubmitting = false

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function getFields() {
  return [...form.querySelectorAll('gcds-input, gcds-textarea')]
}

function getFormData() {
  return getFields().reduce(
    (formData, field) => ({
      ...formData,
      [field.name]: field.value ?? ''
    }),
    { ...initialReportBugFormData }
  )
}

async function validateReportForm() {
  const fields = getFields()

  await Promise.all(fields.map((field) => field.validate?.()))

  const validity = await Promise.all(
    fields.map((field) => (field.checkValidity ? field.checkValidity() : true))
  )

  return validity.every(Boolean)
}

function renderConfirmation(formData) {
  const values = getFields()
    .map((field) => {
      const label = field.getAttribute('label')
      const value = formData[field.name]

      return `
        <gcds-text>
          <strong>${escapeHtml(label)}:</strong>
          ${escapeHtml(value)}
        </gcds-text>
      `
    })
    .join('')

  summary.innerHTML = values
  issueLink.setAttribute('href', buildGithubIssueUrl(formData))
  form.hidden = true
  confirmation.hidden = false
  confirmation.scrollIntoView()
}

async function handleSubmit(event) {
  event.preventDefault()

  if (isSubmitting) {
    return
  }

  isSubmitting = true

  if (await validateReportForm()) {
    renderConfirmation(getFormData())
  }

  isSubmitting = false
}

if (form && confirmation && summary && issueLink) {
  form.addEventListener('submit', handleSubmit)
  form.querySelector('gcds-button[type="submit"]')?.addEventListener('gcdsClick', handleSubmit)
}
