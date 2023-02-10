import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";
export default function TeamStats() {
  const { team } = useParams();
  const [teams, setTeams] = useState([]);
  const data = useTeam(team).response;
  useEffect(() => {
    if (data) {
      setTeams(data);
    }
  }, [data]);

  return (
    <div className="panel">
      <div style={{ width: "100%", marginLeft: 100 }}>
        <TeamLogo id={team} />
        <h1 className="medium-header">{teams.name}</h1>
        <ul className="info-list row">
          <li>
            Est<div>{teams.established}</div>
          </li>
          <li>
            Manager <div>{teams.manager}</div>
          </li>
          <li>
            Coach <div>{teams.coach}</div>
          </li>
        </ul>
        <Link className="center btn-main" to={`/${team}`}>
          {teams.name} Team Page{" "}
        </Link>
      </div>
    </div>
  );
}
