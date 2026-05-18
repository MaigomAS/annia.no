import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { LanguageProvider } from './i18n'
import './styles.css'
import { Contact } from './pages/Contact'
import { Ecosystem } from './pages/Ecosystem'
import { Home } from './pages/Home'
import { Podcasts } from './pages/Podcasts'
import { Insights } from './pages/Insights'
import { NotFound } from './pages/NotFound'
import { SpringChallenges } from './pages/SpringChallenges'

const router = createBrowserRouter([
  {
    element: <AppShell />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/spring-challenges', element: <SpringChallenges /> },
      { path: '/ecosystem', element: <Ecosystem /> },
      { path: '/podcasts', element: <Podcasts /> },
      { path: '/insights', element: <Insights /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>,
)
