import Home from "../Home/Home";
import Notes from "../Home/Notes";
import Current_Project from "../Current_Project/Current_Project";
import People_Assign from "../People_Assign/People_Assign";
import History from "../History/History";

const routes = [
  { exact: true, path: "/home", component: Home },
  { exact: true, path: "/current_project", component: Current_Project },
  { exact: true, path: "/people_assign", component: People_Assign },
  { exact: true, path: "/history", component: History },
  { exact: true, path: "/personalInfo", component: Home },
  { exact: true, path: "/management", component: Home },
  { exact: true, path: "/notes", component: Notes }
];
export default routes;
