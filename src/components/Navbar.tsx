import { userData } from "../DummyProfileData";
import { NavLink } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { IoIosAdd, IoIosNotifications } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";

export function Navbar() {
  return (
    <header className="items-center justify-between py-2 md:mb-4 md:flex md:py-4">
      <div className="md:p-0 p-2 flex items-center justify-between md:justify-center gap-8">
        <NavLink to={"/"} className="text-xl font-bold">
          Polaroyd
        </NavLink>
        <input type="search" className="w-full rounded-sm px-2 py-1 outline-none" />
      </div>
      <div className="hidden md:flex items-center justify-center gap-8">
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

export function NavbarMobile() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2">
      <NavLink to={"/"}>
        <GoHomeFill size={28} />
      </NavLink>
      <NavLink to={"/notification"}>
        <IoIosNotifications size={28} />
      </NavLink>
      <NavLink to={"/upload"}>
        <IoIosAdd size={32} className="rounded-md bg-myRed-1 text-white" />
      </NavLink>
      <NavLink to={"/message"}>
        <FaMessage size={24} />
      </NavLink>
      <NavLink to={"/profile"}>
        <img
          src={userData.profilePicture}
          alt="Profile Picture"
          className="size-8 rounded-full object-cover object-center"
        />
      </NavLink>
    </nav>
  );
}
