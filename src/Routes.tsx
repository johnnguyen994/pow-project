import React, { Suspense } from 'react'
import PageLayout from 'components/layout/Layout'
import { useRoutes } from 'react-router-dom'

const HomePage = React.lazy(() => import('./views/Home'))
const SpellDetailPage = React.lazy(() => import('./views/SpellDetail'))

const RouteComponent = () => {
  return useRoutes([
    {
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<>...</>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: '/spell-detail/:index',
          element: (
            <Suspense fallback={<>...</>}>
              <SpellDetailPage />
            </Suspense>
          ),
        },
      ],
    },
  ])
}

export default RouteComponent
