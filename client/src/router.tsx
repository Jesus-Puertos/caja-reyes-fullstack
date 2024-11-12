import {createBrowserRouter, RouteObject} from 'react-router-dom';
import Layout from './layouts/Layout';
import Patners, {loader as patnersLoader} from './views/Patners';
import NewPatner, {action as newPatnerAction} from './views/NewPatner';
import EditPatner, {loader as editPatnerLoader, action as editPatnerAction} from './views/EditPatner';
import { action as deleteProductAction} from './components/shared/PatnerDeatils';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children:[
        {
            index: true,
            element: <Patners />,
            loader:patnersLoader
        },
        {
            path: 'socios/nuevo',
            element: <NewPatner />,
            action: newPatnerAction
        },
        {
            path:'socios/:id/editar', // ROA Pattern - Resource Oriented
            element: <EditPatner    />,
            loader: editPatnerLoader,
            action: editPatnerAction
        },
        {
            path: 'socios/:id/eliminar',
            action: deleteProductAction

        }
    ]
    },
];

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;