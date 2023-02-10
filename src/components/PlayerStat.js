import React, { useEffect, useState } from "react";
import usePlayers from "../hooks/usePlayers";
import { useParams, Link } from "react-router-dom";
export default function PlayerStats() {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();
  const data = usePlayers();
  useEffect(() => {
    if (data) {
      setPlayers(data);
    }
  }, [data]);

  const currentPlayer = players.filter((player) => {
    return player.id === id;
  });

  const playerDetails = currentPlayer.map((details) => {
    return (
      <div key={details.id} className="panel fade-enter-done">
        <img className="avatar" alt={details.id} src={details.avatar}></img>
        <h1 className="medium-header">{details.name}</h1>
        <h3 className="header"># {details.number}</h3>
        <div className="row">
          <ul className="info-list" style={{ marginRight: 80 }}>
            <li>
              Team{" "}
              <div>
                <Link to={`/${details.teamId}`}>
                  {details.teamId.charAt(0).toUpperCase() +
                    details.teamId.slice(1)}
                </Link>
              </div>
            </li>
            <li>
              Position <div>{details.position}</div>
            </li>
            <li>
              PPG <div>{details.ppg}</div>
            </li>
          </ul>
          <ul className="info-list">
            <li>
              APG
              <div>{details.apg}</div>
            </li>
            <li>
              SPG <div>{details.spg}</div>
            </li>
            <li>
              RPG <div>{details.rpg}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  });
  return <div>{playerDetails}</div>;
}
