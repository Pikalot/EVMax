import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/cars", element: <Shop /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
