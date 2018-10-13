import LoginPage from "views/Pages/LoginPage.jsx";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
import Dashboard from "../views/Dashboard/Dashboard";

const pagesRoutes = [
  {
    path: "/",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: "/dash",
    name: "Dashboard",
    short: "Dash",
    mini: "DSH",
    component: Dashboard
  },
];

export default pagesRoutes;
