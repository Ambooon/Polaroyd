import { userData } from "../DummyProfileData";
import { NavLink } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="hidden items-center justify-between py-2 md:mb-8 md:flex">
      <div className="flex items-center justify-center gap-8">
        <NavLink to={"/"} className="text-xl font-bold">
          Polaroyd
        </NavLink>
        <input type="search" className="rounded-sm px-2 py-1 outline-none" />
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-4">
          <NavLink to={"/message"}>
            <FaMessage size={20} />
          </NavLink>
          <button>
            <IoIosNotifications size={28} />
          </button>
        </div>
        <NavLink to={"/profile"}>
          <img
            src={userData.profilePicture}
            alt="Profile Picture"
            className="size-8 rounded-full object-cover object-center"
          />
        </NavLink>
      </div>
    </header>
  );
}
