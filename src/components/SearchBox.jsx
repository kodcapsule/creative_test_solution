import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBox() {
  return (
    <form className=" hidden md:flex w-1/2 ">
      <div className="search flex items-center gap-2  px-1  bg-slate-200 pr-0 rounded-md shadow-md w-full">
        <FaMagnifyingGlass />
        <input
          type="search"
          placeholder="search"
          className=" px-4 py-1 bg-slate-200 rounded-md focus:outline-none focus:bg-slate-100 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full"
        />
      </div>
    </form>
  );
}

export default SearchBox;
