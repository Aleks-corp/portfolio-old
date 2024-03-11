import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        children: [
          {
            index: true,
            lazy: () => import("./pages/HomePage"),
          },

          {
            path: "*",
            lazy: () => import("./pages/ErrorPage"),
          },
        ],
      },
    ],
    { basename: "/portfolio" }
  );
  return <RouterProvider router={router} />;
}

export default App;
