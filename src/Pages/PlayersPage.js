import usePlayers from "../hooks/usePlayers";
import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const { pathname } = useLocation();
  const { search } = useLocation();
  console.log({ search });
  const searchQuery = new URLSearchParams(search);
  const teamID = searchQuery.get("teamId");
  console.log(teamID);

  const path = "/" + pathname.split("/")[1];

  const data = usePlayers();

  useEffect(() => {
    if (data) {
      setPlayers(data);
    }
  }, [data]);

  console.log(players);

  const teamPlayers = players.filter((team) => {
    return team.teamId === teamID;
  });

  console.log(teamPlayers);

  return (
    <div className="container two-column">
      <div style={{ flex: 1 }}>
        {teamID ? (
          <>
            <h3 className="header"> Players </h3>
            <ul className="sidebar-list">
              {teamPlayers.map((player, index) => {
                return (
                  <li key={index} style={{ fontWeight: "normal" }}>
                    <Link to={`${path}/${player.id}${search}`}>
                      {player.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            {" "}
            <h3 className="header"> Players </h3>
            <ul className="sidebar-list">
              {players.map((player, index) => {
                return (
                  <li key={index} style={{ fontWeight: "normal" }}>
                    <Link to={`${path}/${player.id}`}>{player.name}</Link>
                  </li>
                );
              })}
            </ul>{" "}
          </>
        )}
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
