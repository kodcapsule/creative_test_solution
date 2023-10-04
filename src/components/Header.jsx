import SearchBox from "./SearchBox";
import Notification from "./Notification";
import Profile from "./Profile";

function Header() {
  return (
    <header className=" flex justify-between bg-white px-6 py-2 shadow-sm">
      <span>Welcome Kuseh</span>

      <SearchBox />
      <div className="left_content flex gap-4">
        <Notification />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
