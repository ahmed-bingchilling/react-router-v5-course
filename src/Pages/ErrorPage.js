import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <i>{error.statusText || error.message}</i>
      <Link to="/"> Back To HomePage</Link>
    </div>
  );
}
