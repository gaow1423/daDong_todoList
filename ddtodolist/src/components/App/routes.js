import Home from "../Home/Home";
const routes = [
  { exact: true, path: "/home", component: Home },
  { exact: true, path: "/current_project", component: Home },
  { exact: true, path: "/people_assign", component: Home },
  { exact: true, path: "/history", component: Home },
  { exact: true, path: "/personalInfo", component: Home },
  { exact: true, path: "/management", component: Home }
];
export default routes;
