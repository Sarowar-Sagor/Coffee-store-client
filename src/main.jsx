import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Root from './Components/Root.jsx'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'
import Users from './Components/Users.jsx'
import Users2 from './Components/Users2.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Details from './Components/Details.jsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("https://coffee-store-server-two-wheat.vercel.app/coffee")
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-two-wheat.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://coffee-store-server-two-wheat.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://coffee-store-server-two-wheat.vercel.app/users")
      },
      {
        path: "/users2",
        element: <Users2></Users2>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
)
