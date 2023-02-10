import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TeamLogo from "../components/TeamLogo";
import useTeam from "../hooks/useTeam";
import useTeamsArticles from "../hooks/useTeamsArticles";
export default function OfficialTeamPage() {
  const { teamname } = useParams();
  const data = useTeam(teamname).response;
  const [teamInfo, setTeamInfo] = useState([]);
  const [teamsArticles, setTeamArticles] = useState([]);
  const articles = useTeamsArticles(teamname).response;
  useEffect(() => {
    if (data) {
      setTeamInfo(data);
      setTeamArticles(articles);
    }
  }, [data, articles]);
  console.log(teamInfo);
  const isTeam = Object.keys(teamInfo);
  console.log(isTeam);
  return (
    <>
      {isTeam.length > 0 ? (
        <div className="panel">
          <TeamLogo id={teamname} />
          <h1 className="medium-header">{teamInfo.name}</h1>
          <h4 style={{ margin: 5 }}>
            <Link to={`/players?teamId=${teamname}`}>View Roster</Link>
          </h4>
          <h4>Championships</h4>
          <ul className="championships">
            {teamInfo?.championships?.map((year, index) => {
              return <li key={index}>{year}</li>;
            })}
          </ul>
          <ul className="info-list row" style={{ width: "100%" }}>
            <li>
              Est. <div>{teamInfo.established}</div>
            </li>
            <li>
              Manager <div>{teamInfo.manager}</div>
            </li>
            <li>
              {" "}
              Coach <div>{teamInfo.coach}</div>
            </li>
            <li>
              Record
              <div>
                {teamInfo.wins}-{teamInfo.losses}
              </div>
            </li>
          </ul>
          <h2 className="header">Articles</h2>
          <ul className="articles">
            {teamsArticles?.map((article) => {
              return (
                <li key={article.id}>
                  <Link>
                    <h4 className="article-title">{article.title}</h4>
                    <div className="article-date">{article.date}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Team {teamname} not found mother yoker
        </h1>
      )}
    </>
  );
}
