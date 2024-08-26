import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Practice from 'pages/Practice';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contest from 'pages/Contest';
import Discuss from 'pages/Discuss';
import Profile from 'pages/Profile';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from 'component/ProtectedRoute'; 
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'problems',
        element:<Home /> 
      },
      {
        path: 'contest',
        element: <ProtectedRoute element={<Contest />} /> 
      },
      {
        path: 'discuss',
        element: <ProtectedRoute element={<Discuss />} /> 
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path:"profile",
        element:<ProtectedRoute element={<Profile />} /> 
      }
    ],
  },
  {
    path: "/practice/:id",
    element: <ProtectedRoute element={<Practice />} /> 
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
