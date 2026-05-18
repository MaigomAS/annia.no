import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import './styles.css'
import { Contact } from './pages/Contact'
import { Ecosystem } from './pages/Ecosystem'
import { Home } from './pages/Home'
import { Podcasts } from './pages/Podcasts'
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
      { path: '/insights', element: <Navigate to="/podcasts" replace /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
