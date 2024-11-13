import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from './layouts/Layout';
import Patners, { loader as patnersLoader } from './views/Patners';
import NewPatner, { action as newPatnerAction } from './views/NewPatner';
import EditPatner, { loader as editPatnerLoader, action as editPatnerAction } from './views/EditPatner';
import { action as deleteProductAction } from './components/shared/PatnerDeatils';
import AuthLayout from './layouts/AuthLayout';
import LoginView from './views/auth/LoginView';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Patners />,
        loader: patnersLoader
      },
      {
        path: 'socios/nuevo',
        element: <NewPatner />,
        action: newPatnerAction
      },
      {
        path: 'socios/:id/editar',
        element: <EditPatner />,
        loader: editPatnerLoader,
        action: editPatnerAction
      },
      {
        path: 'socios/:id/eliminar',
        action: deleteProductAction
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <LoginView />
      },
     
    ]
  }
];

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;