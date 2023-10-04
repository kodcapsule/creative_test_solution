import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { MdOutlinePayments, MdSettings } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

function AsideBar() {
  const [file, setFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setFile(e.target.files[0]);

    if (file) {
      console.log(file);
    } else {
      console.log(file);
      alert("No file Selected");
    }
  }

  return (
    <div className="flex flex-col p-2 gap-10 shadow-lg bg-white">
      <Link to="content">
        <Logo />
      </Link>
      <ul className="middleContent flex flex-col gap-10  h-5/6 mt-10">
        <li className="flex items-center border-[1.5px] border-solid border-red-400  rounded-lg px-2 py-2 shadow-sm gap-2 hover:bg-red-100 cursor-pointer text-red-400 text-center w-3/4 transition-all duration-500">
          <span className=" text-2xl">
            <MdOutlinePayments />
          </span>
          <NavLink to="content/payments">Bulk Payments</NavLink>
        </li>
      </ul>
      <div className="buttonContent">
        <ul className="flex flex-col gap-3">
          <li className=" flex gap-2 items-center">
            <NavLink to="content/settings"> Settings</NavLink>
          </li>
          <li className=" flex gap-2 items-center">
            <NavLink to="content/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AsideBar;
