import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import './styles.css'
import { Contact } from './pages/Contact'
import { Ecosystem } from './pages/Ecosystem'
import { Home } from './pages/Home'
import { Insights } from './pages/Insights'
import { NotFound } from './pages/NotFound'
import { SpringChallenges } from './pages/SpringChallenges'
import { I18nProvider } from './i18n/I18nProvider'

const router = createBrowserRouter([
  {
    element: <AppShell />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/spring-challenges', element: <SpringChallenges /> },
      { path: '/ecosystem', element: <Ecosystem /> },
      { path: '/insights', element: <Insights /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </React.StrictMode>,
)
