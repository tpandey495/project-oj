import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Practice from './pages/Practice'
import Register from './pages/Register';
import Login from './pages/Login';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element:<Home />
      },
      {
        path:'problems',
        element:<Home />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:"register",
        element:<Register />
      }
    ],
  },
  {
    path:"/practice/:id",
    element:<Practice />
  }
]);

const App=()=>{
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
