import { FaUser } from "react-icons/fa6";

function Profile({ imageUrl = "" }) {
  return (
    <div>
      <span className=" rounded-full  bg-slate-300  flex items-center justify-center cursor-pointer">
        {imageUrl === "" ? (
          <FaUser className=" text-gray-500 p-1 rounded-full w-8 h-8" />
        ) : (
          <img src={`${imageUrl}`} alt="" className="rounded-full w-8 h-8" />
        )}
      </span>
    </div>
  );
}

export default Profile;
