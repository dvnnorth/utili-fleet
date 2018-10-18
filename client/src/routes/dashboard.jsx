import Dashboard from "views/Dashboard/Dashboard.jsx";
//import Buttons from "views/Components/Buttons.jsx";
//import GridSystem from "views/Components/GridSystem.jsx";
//import Panels from "views/Components/Panels.jsx";
//import SweetAlert from "views/Components/SweetAlert.jsx";
//import Notifications from "views/Components/Notifications.jsx";
//import Icons from "views/Components/Icons.jsx";
//import Typography from "views/Components/Typography.jsx";
// import RegularForms from "views/Forms/RegularForms.jsx";
//import ExtendedForms from "views/Forms/ExtendedForms.jsx";
// import ValidationForms from "views/Forms/ValidationForms.jsx";
import CheckInWizardContainer from "views/Forms/CheckInWizardContainer.jsx";
import CheckOut from "views/Forms/CheckOut.jsx";
import DriverForm from "views/Forms/DriverForm.jsx";
// import RegularTables from "views/Tables/RegularTables.jsx";
//import ExtendedTables from "views/Tables/ExtendedTables.jsx";
//import ReactTables from "views/Tables/ReactTables.jsx";
import Agreements from "views/Tables/Agreements.jsx";
import Claims from "views/Tables/Claims.jsx";
import Employees from "views/Tables/Employees.jsx";
import Damages from "views/Tables/Damages.jsx";
import Maintenance from "views/Tables/Maintenance.jsx";
import Vehicles from "views/Tables/Vehicles.jsx";
import Drivers from "views/Tables/Drivers.jsx";
// import GoogleMaps from "views/Maps/GoogleMaps.jsx";
// import FullScreenMap from "views/Maps/FullScreenMap.jsx";
// import VectorMap from "views/Maps/VectorMap.jsx";
// import Charts from "views/Charts/Charts.jsx"; 
// import Calendar from "views/Calendar/Calendar.jsx";
// import Widgets from "views/Widgets/Widgets.jsx";
//import UserProfile from "views/Pages/UserProfile.jsx";
//import TimelinePage from "views/Pages/Timeline.jsx";
//import RTLSupport from "views/Pages/RTLSupport.jsx";

import { Formik } from "formik";

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

//import form

import RegularForms from "../views/Forms/VehicleForm";

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
    component: CheckInWizardContainer
  },
  {
    path: "/checkout",
    name: "Check-out",
    icon: ArrowUpward,
    component: CheckOut
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
        component: RegularForms
      },
      {
        path: "/vehicles/view",
        name: "View",
        mini: "V",
        component: Vehicles
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
    state: "openReports",
    icon: "content_paste",
    views: [
      {
        path: "/reports/agreements",
        name: "Agreements",
        mini: "A",
        component: Agreements
      },
      {
        path: "/reports/claims",
        name: "Claims",
        mini: "C",
        component: Claims
      },
      // {
      //   path: "/reports/drivers",
      //   name: "Drivers",
      //   mini: "D",
      //   component: drivers
      // },
      {
        path: "/reports/damages",
        name: "Damages",
        mini: "DA",
        component: Damages
      },
      {
        path: "/reports/employees",
        name: "Employees",
        mini: "E",
        component: Employees
      },
      {
        path: "/reports/maint",
        name: "Maintenance",
        mini: "M",
        component: Maintenance
      },
      {
        path: "/reports/vehicles",
        name: "Vehicles",
        mini: "VL",
        component: Vehicles
      },
      {
        path: "/reports/drivers",
        name: "Drivers",
        mini: "DV",
        component: Drivers
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: "notes",
    views: [
      {
        path: "/forms/driver",
        name: "Add Driver",
        mini: "AD",
        component: DriverForm
      },
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
];
export default dashRoutes;
