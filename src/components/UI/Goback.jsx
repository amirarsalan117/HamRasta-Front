import { useNavigate } from "react-router-dom";
export const Goback = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>GoBack</button>;
};
