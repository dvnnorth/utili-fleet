import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
//import Panels from "views/Components/Panels.jsx";
//import SweetAlert from "views/Components/SweetAlert.jsx";
//import Notifications from "views/Components/Notifications.jsx";
//import Icons from "views/Components/Icons.jsx";
//import Typography from "views/Components/Typography.jsx";
// import RegularForms from "views/Forms/RegularForms.jsx";
// import ExtendedForms from "views/Forms/ExtendedForms.jsx";
// import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard.jsx";
// import RegularTables from "views/Tables/RegularTables.jsx";
// import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
// import GoogleMaps from "views/Maps/GoogleMaps.jsx";
// import FullScreenMap from "views/Maps/FullScreenMap.jsx";
// import VectorMap from "views/Maps/VectorMap.jsx";
// import Charts from "views/Charts/Charts.jsx";
// import Calendar from "views/Calendar/Calendar.jsx";
// import Widgets from "views/Widgets/Widgets.jsx";
//import UserProfile from "views/Pages/UserProfile.jsx";
//import TimelinePage from "views/Pages/Timeline.jsx";
//import RTLSupport from "views/Pages/RTLSupport.jsx";

// import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
// import Image from "@material-ui/icons/Image";
// import Apps from "@material-ui/icons/Apps";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import GridOn from "@material-ui/icons/GridOn";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
// import Place from "@material-ui/icons/Place";
// import WidgetsIcon from "@material-ui/icons/Widgets";
// import Timeline from "@material-ui/icons/Timeline";
// import DateRange from "@material-ui/icons/DateRange";

// var pages = [
//   {
//     path: "/timeline-page",
//     name: "Timeline Page",
//     mini: "TP",
//     component: TimelinePage
//   },
//   {
//     path: "/user-page",
//     name: "User Profile",
//     mini: "UP",
//     component: UserProfile
//   },
//   {
//     path: "/user-page",
//     name: "Test Page",
//     mini: "TP",
//     component: UserProfile
//   },
//   {
//     path: "/rtl/rtl-support-page",
//     name: "RTL Support",
//     mini: "RS",
//     component: RTLSupport
//   }
// ].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: "/checkin",
    name: "Check-in",
    icon: ArrowDownward,
    component: Dashboard
  },
  {
    path: "/checkout",
    name: "Check-out",
    icon: ArrowUpward,
    component: Dashboard
  },
  // {
  //   collapse: true,
  //   path: "-page",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: Image,
  //   views: pages
  // },
  {
    collapse: true,
    path: "/vehicles",
    name: "Vehicles",
    state: "openComponents",
    icon: DirectionsCar,
    views: [
      {
        path: "/vehicles/add",
        name: "Add",
        mini: "A",
        component: Wizard
      },
      {
        path: "/vehicles/view",
        name: "View",
        mini: "V",
        component: Wizard
      },
      // {
      //   path: "/components/panels",
      //   name: "Panels",
      //   mini: "P",
      //   component: Panels
      // },
      // {
      //   path: "/components/sweet-alert",
      //   name: "Sweet Alert",
      //   mini: "SA",
      //   component: SweetAlert
      // },
      // {
      //   path: "/components/notifications",
      //   name: "Notifications",
      //   mini: "N",
      //   component: Notifications
      // },
      // { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
      // {
      //   path: "/components/typography",
      //   name: "Typography",
      //   mini: "T",
      //   component: Typography
      // }
    ]
  },
  {
    collapse: true,
    path: "/reports",
    name: "Reports",
    state: "openForms",
    icon: "content_paste",
    views: [
      {
        path: "/forms/agreements",
        name: "Agreements",
        mini: "A",
        component: ReactTables
      },
      {
        path: "/reports/claims",
        name: "Claims",
        mini: "C",
        component: ReactTables
      },
      {
        path: "/reports/maint",
        name: "Maintenance",
        mini: "M",
        component: ReactTables
      },
      {
        path: "/forms/vehiclelist",
        name: "Vehicle List",
        mini: "VL",
        component: ReactTables
      }
    ]
  },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: GridOn,
  //   views: [
  //     {
  //       path: "/tables/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables
  //     },
  //     {
  //       path: "/tables/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables
  //     },
  //     {
  //       path: "/tables/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: Place,
  //   views: [
  //     {
  //       path: "/maps/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps
  //     },
  //     {
  //       path: "/maps/full-screen-maps",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap
  //     },
  //     {
  //       path: "/maps/vector-maps",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap
  //     }
  //   ]
  // },
  // { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  // { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  // { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/pages/login-page", name: "login-page" }
];
export default dashRoutes;
