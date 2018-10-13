import LoginPage from "views/Pages/LoginPage.jsx";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";

const pagesRoutes = [
  {
    path: "/",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  }
];

export default pagesRoutes;
