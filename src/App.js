import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CarListing from "./pages/CarListing";
import RootLayout from "./pages/Root";
import ContactMe from "./pages/ContactMe";
import Brands from "./pages/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/cars", element: <CarListing /> },
      { path: "/brands", element: <Brands /> },
      { path: "/contactme", element: <ContactMe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
