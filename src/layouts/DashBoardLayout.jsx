import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";
import Header from "../components/Header";

function DashBoardLayout() {
  return (
    <div className=" main__content h-screen ">
      <AsideBar />
      <main>
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashBoardLayout;
