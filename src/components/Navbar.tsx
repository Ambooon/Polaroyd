import { FaCaretDown } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";
import { RiNotification3Line } from "react-icons/ri";
import { userData } from "../DummyProfileData";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-16">
      <NavLink to={"/"}>Home</NavLink>
      <div className="w-full">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 placeholder-gray-400 focus:border-blue-300 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>
      <div className="flex shrink-0 items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-4 border-r border-myNeutral-2 px-4">
          <button>
            <TiMessage size={28} />
          </button>
          <button>
            <RiNotification3Line size={24} />
          </button>
        </div>
        <button className="flex items-center justify-between gap-2 rounded-full bg-myNeutral-4 p-1 text-white">
          <img
            className="h-8 w-8 rounded-full object-cover object-center"
            src={userData.profilePicture}
            alt="Profile Picture"
          />
          <p>{userData.username}</p>
          <FaCaretDown />
        </button>
      </div>
    </nav>
  );
}
