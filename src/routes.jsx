import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { PageNotFond } from "../pages/PageNotFound";
import { ContactUs } from "../pages/ContactUs";
import { Boards } from "../pages/Boards";
import { Dashboards } from "../pages/Dashboards";
import { Templates } from "../pages/templates";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/boards", element: <Boards /> },
  { path: "/dashboards", element: <Dashboards /> },
  { path: "/templates", element: <Templates /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "*", element: <PageNotFond /> },
];
