import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import RootLayout from "./pages/Root";
import AuthProvider from "./store/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <RootLayout />
      </AuthProvider>
    ),
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
