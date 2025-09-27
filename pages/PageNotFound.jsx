import { useNavigate, Link } from "react-router-dom";
export const PageNotFond = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Page not found</h2>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
      <Link to="/">Home</Link>
    </div>
  );
};
