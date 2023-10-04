import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";

import DashBoardLayout from "./layouts/DashBoardLayout";
import MainContent from "./components/MainContent";
import Payments from "./components/Payments";
import PreviousPayments from "./components/PreviousPayments";
import AboutPCES from "./pages/AboutPCES";
import ErrorPage from "./pages/ErrorPage";
import PaymentPage from "./pages/PaymentPage";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    element: <DashBoardLayout />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainContent />,
        path: "content",
        errorElement: <ErrorPage />,
        children: [
          {
            element: <PaymentPage />,
            path: "payments",
          },
          {
            element: <PreviousPayments />,
            path: "previousPayments",
          },
          {
            element: <AboutPCES />,
            path: "about",
          },
          {
            element: <Settings />,
            path: "settings",
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
