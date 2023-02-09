import usePlayers from "../hooks/usePlayers";
import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const { pathname } = useLocation();

  const path = "/" + pathname.split("/")[1];

  console.log(path);

  const data = usePlayers();

  useEffect(() => {
    if (data) {
      setPlayers(data);
    }
  }, [data]);

  return (
    <div className="container two-column">
      <div style={{ flex: 1 }}>
        <h3 className="header"> Players </h3>
        <ul className="sidebar-list">
          {players.map((player, index) => {
            return (
              <li key={index} style={{ fontWeight: "normal" }}>
                <Link to={`${path}/${player.id}`}>{player.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {pathname === "/players" && (
        <div className="sidebar-instruction fade-enter-done">
          Select a Player
        </div>
      )}
      <Outlet />
    </div>
  );
}
