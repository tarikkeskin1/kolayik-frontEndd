import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ListUser from "../views/ui/ListUser";
import ListDayOff from "../views/ui/ListDayOff";
import ListExpense from "../views/ui/ListExpense";
import UpdateUser from "../views/ui/UpdateUser";
import UpdateDayOff from "../views/ui/UpdateDayOff";
import UpdateExpense from "../views/ui/UpdateExpense";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
const Tables = lazy(() => import("../views/Tables"));
const Forms = lazy(() => import("../views/ui/UserSave"));
const Expense = lazy(() => import("../views/ui/ExpenseSave"));
// const DayOff = lazy(() => import("../views/ui/DayOffSave"));
const CreateDayOff = lazy(() => import("../views/ui/CreateDayOff"));
// const ListDayOff = lazy(() => import("../views/ui/ListDayOff"));
// const ListExpense = lazy(() => import("../views/ui/ListExpense"));
const CreateExpense = lazy(() => import("../views/ui/CreateExpense"));
// const UpdateUser = lazy(() => import("../views/ui/UpdateUser"));
const Starter = lazy(() => import("../views/Starter.js"));






/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/list", exact: true, element: <ListUser /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/expense", exact: true, element: <Expense /> },
      { path: "/createDayOff", exact: true, element: <CreateDayOff /> },
      { path: "/listDayOff", exact: true, element: <ListDayOff /> },
      { path: "/listExpense", exact: true, element: <ListExpense /> },
      { path: "/createExpense", exact: true, element: <CreateExpense /> },
      { path: "/updateUser", exact: true, element: <UpdateUser /> },
      { path: "/updateDayOff", exact: true, element: <UpdateDayOff /> },
      { path: "/updateExpense", exact: true, element: <UpdateExpense /> },









    ],
  },
];

export default ThemeRoutes;
