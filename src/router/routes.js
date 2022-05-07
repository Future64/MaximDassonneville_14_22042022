import CreateEmployee from '../pages/createEmployee/CreateEmployee'
import ListEmployee from '../pages/listEmployee/ListEmployee'
import Error404 from '../pages/error404/Error404'

export const routes = [
    {
        path: '/',
        exact: true,
        element: <CreateEmployee />
    },
    {
        path: '/list-employee',
        exact: true,
        element: <ListEmployee />
    },
    {
        path: '*',
        exact: false,
        element: <Error404 />
    }
]