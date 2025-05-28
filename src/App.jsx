import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from "./ProtectedRoutes";
import "./App.css"
import Loader from "./components/Loader";

// pages impot with lazy loading 
const AddEmployees = lazy(() => import("./pages/AddEmployees/AddEmployees"))
const ShowEmployees = lazy(() => import("./pages/ShowEmployees/ShowEmployees"))


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      // <Suspense fallback={<Loader/>}></Suspense>,
      { index: true, element: <AddEmployees /> },
      { path: "employee", element: <ShowEmployees /> },
    ],
  },
]);



const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Suspense>
  )
}

export default App;