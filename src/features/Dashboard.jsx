import AsideBar from "../components/AsideBar";
import MainContent from "../components/MainContent";

function Dashboard() {
  return (
    <div className=" grid grid-cols-12">
      <AsideBar />
      <MainContent />
    </div>
  );
}

export default Dashboard;
