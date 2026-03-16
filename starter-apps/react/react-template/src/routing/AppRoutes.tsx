import { Navigate, Route, Routes } from 'react-router-dom'

import AboutPage from '@/pages/About'
import AboutTopicPage from '@/pages/AboutTopic'
import HomePage from '@/pages/Home'
import NotFoundPage from '@/pages/NotFound'
import ReportABugPage from '@/pages/ReportABug'
import { defaultLocale, localizedSegments } from '@/routing/constants'
import LocaleRoute from '@/routing/LocaleRoute'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Navigate replace to={`/${defaultLocale}/`} />} path="/" />

      <Route element={<LocaleRoute />} path="/:locale">
        <Route element={<HomePage />} index />

        <Route element={<AboutPage />} path={localizedSegments.about.en} />
        <Route element={<AboutPage />} path={localizedSegments.about.fr} />

        <Route element={<AboutTopicPage />} path={localizedSegments.aboutTopic.en} />
        <Route element={<AboutTopicPage />} path={localizedSegments.aboutTopic.fr} />

        <Route element={<ReportABugPage />} path={localizedSegments.reportABug.en} />
        <Route element={<ReportABugPage />} path={localizedSegments.reportABug.fr} />

        <Route element={<NotFoundPage />} path="*" />
      </Route>

      <Route element={<Navigate replace to={`/${defaultLocale}/`} />} path="*" />
    </Routes>
  )
}
