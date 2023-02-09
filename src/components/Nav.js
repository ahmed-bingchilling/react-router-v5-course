import { Outlet, Link } from "react-router-dom";
function ColorfulBorder() {
  return (
    <ul className="border-container">
      <li className="border-item" style={{ background: "var(--red)" }} />
      <li className="border-item" style={{ background: "var(--blue)" }} />
      <li className="border-item" style={{ background: "var(--pink)" }} />
      <li className="border-item" style={{ background: "var(--yellow)" }} />
      <li className="border-item" style={{ background: "var(--aqua)" }} />
    </ul>
  );
}
export default function Nav() {
  return (
    <>
      <ColorfulBorder />
      <div className="container navbar">
        <Link to="/">Home</Link>
        <nav className="nav-links">
          <Link to="/players">Players</Link>
          <Link to="/teams  ">Teams</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
