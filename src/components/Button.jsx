import React from "react";

function Button({ icon, displayTest }) {
  return (
    <button className=" flex items-center border-2 border-solid border-red-400  rounded-lg px-3 py-2 shadow-sm gap-2 hover:bg-red-100 cursor-pointer text-red-400">
      <span>{displayTest}</span>
    </button>
  );
}

export default Button;
