import {Outlet, createBrowserRouter} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthProvider from '../context/AuthProvider';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoudte';
import NoteList from '../components/NoteList';
import { Note } from '@mui/icons-material';

const AuthLayout=()=>{
    return <AuthProvider>
        <Outlet></Outlet>
    </AuthProvider>
}

export default createBrowserRouter([
    // {
    //     element: <AuthLayout/>,
    //     errorElement: <ErrorPage />,
    //     children:[
    //         {
    //             element:<Login/>,
    //             path:'/login',
    //         },
    //         {
    //             element: <ProtectedRoute children={undefined} />,
    //             children:[
    //             {
    //                 element:<Home/>,
    //                 path: '/',
    //                 children:[
    //                     {
    //                         element:<NoteList/>,
    //                         path: `folders/:folderId`,
    //                         children:[
    //                             {
    //                                 element: <Note/>,
    //                                 path:`note/:noteId`
    //                             }
    //                         ]

    //                     }
    //                 ]
    //             }
    //             ]
    //         }
         
    //     ]
    // }
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            element: <Login />,
            path: '/login',
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                element: <Home />,
                path: '/',
                // loader: foldersLoader,
                children: [
                  {
                    element: <NoteList />,
                    path: `folders/:folderId`,
                    // action: addNewNote,
                    // loader: notesLoader,
                    children: [
                      {
                        element: <Note />,
                        path: `note/:noteId`,
                        // action: updateNote,
                        // loader: noteLoader,
                      }
                    ]
                  }
                ]
              },
            ],
          },
        ],
      },
])