import { useNavigate } from "react-router-dom";
export const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate("/")}>GO TO Home PAge</button>
    </div>
  );
};
