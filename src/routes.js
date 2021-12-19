import Checks from "views/Checks"
import Inventory from "views/Inventory"
import Member from "views/Member"
import Order from "views/Order"
import Staff from "views/Staff"


const dashboardRoutes = [
  
  {
    path: "/checks",
    name: "打單",
    icon: "nc-icon nc-chart-pie-35",
    component: Checks,
    layout: "/admin",
  },
  {
    path: "/inventory",
    name: "倉儲管理",
    icon: "nc-icon nc-circle-09",
    component: Inventory,
    layout: "/admin",
  },
  {
    path: "/member",
    name: "會員資料",
    icon: "nc-icon nc-notes",
    component: Member,
    layout: "/admin",
  },
  {
    path: "/staff",
    name: "員工資料",
    icon: "nc-icon nc-paper-2",
    component: Staff,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "表單查詢",
    icon: "nc-icon nc-atom",
    component: Order,
    layout: "/admin",
  },
];

export default dashboardRoutes;
