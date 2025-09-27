import { Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/UI/NavBar";
import { Goback } from "./components/UI/Goback";
import { routes } from "./routes";
function App() {
  return (
    <div>
      <NavBar />
      <Goback />
      <Routes>
        {routes.map(({ path, element }, index) => {
          return <Route path={path} element={element} key={index} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
