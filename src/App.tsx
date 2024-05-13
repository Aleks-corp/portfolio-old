import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import "./App.css";

function App() {
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
            path: "about",
            lazy: () => import("./pages/AboutPage"),
          },
          {
            path: "projects",
            lazy: () => import("./pages/ProjectsPage"),
          },
          {
            path: "contacts",
            lazy: () => import("./pages/ContactsPage"),
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
