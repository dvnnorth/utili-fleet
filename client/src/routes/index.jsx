import Dashboard from "layouts/Dashboard.jsx";
import Pages from "layouts/Pages.jsx";

var indexRoutes = [
  { path: "/", name: "Login", component: Pages },
  { path: "/dashboard", name: "Dashboard", component: Dashboard }
];

export default indexRoutes;
