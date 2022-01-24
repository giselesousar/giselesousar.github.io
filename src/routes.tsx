import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Main from './pages/Main';

const Routes: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
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