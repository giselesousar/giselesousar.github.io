import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import PageNotFound from './components/MainLayout';
import Main from './pages/Main';

const Routes: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '*', element: <Navigate to="/404" /> },
      {path: '404', element: <PageNotFound />},
    ]
  }
  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
}

export default Routes;