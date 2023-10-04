import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <div className=" p-4  ">
      <h2 className=" text-2xl font-semibold mt-4 text-center">
        Welcome to PCES Bulk Payment System
      </h2>
      <div className="items h-full mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default MainContent;
