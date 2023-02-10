import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
export default function TeamPage() {
  const [teamNames, setTeamNames] = useState([]);
  const { pathname } = useLocation();

  const path = "/" + pathname.split("/")[1];
  console.log({ path });

  const data = useTeamNames();
  useEffect(() => {
    if (data) {
      setTeamNames(data);
    }
  }, [data]);

  const names = teamNames.map((name, index) => {
    return (
      <li key={index} style={{ fontWeight: "normal" }}>
        <Link to={`/teams/${name}`}>{name.toUpperCase()}</Link>
      </li>
    );
  });
  return (
    <div className="container two-column">
      <div>
        <h3 className="header">Teams</h3>
        <ul className="sidebar-list">{names}</ul>
      </div>
      {pathname === "/teams" && (
        <div className="sidebar-instruction">Select a Team</div>
      )}
      <Outlet />
    </div>
  );
}
