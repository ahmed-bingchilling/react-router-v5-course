import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import PlayersPage from "./Pages/PlayersPage";
import TeamPage from "./Pages/TeamPage";
import PlayerStats from "./components/PlayerStat";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/players",
        element: <PlayersPage />,
        children: [
          {
            path: "/players/:id",
            element: <PlayerStats />,
          },
        ],
      },

      {
        path: "/teams",
        element: <TeamPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
