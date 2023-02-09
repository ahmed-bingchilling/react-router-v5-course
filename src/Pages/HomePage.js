import TeamLogo from "../components/TeamLogo";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h1 className="large-header">Hash History Basketball League</h1>
        <h3 className="header text-center">Select a Team</h3>
        <TeamLogo />
      </div>
    </>
  );
}
