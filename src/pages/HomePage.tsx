import PictureFrame from "../components/PictureFrame";
import { data } from "../DummyData";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { IoIosAdd, IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen sm:container sm:mx-auto">
      <Navbar />
      <div className="mb-4 hidden justify-end md:flex">
        <NavLink
          to={"/upload"}
          className="rounded-md bg-myRed-1 p-2 text-white"
        >
          Add Photo
        </NavLink>
      </div>
      <section className="items-center gap-4 pb-16 pt-8 columns-2xs space-y-8 md:pt-0">
        {data.map((item, index) => {
          return <PictureFrame key={index} data={{ ...item }} />;
        })}
      </section>
      <div className="fixed bottom-0 left-0 z-50 w-screen md:hidden">
        <NavBarMobile />
      </div>
    </div>
  );
}

function NavBarMobile() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2">
      <button>
        <GoHomeFill size={28} />
      </button>
      <button>
        <GoSearch size={28} />
      </button>
      <button>
        {" "}
        <IoIosAdd size={32} className="rounded-md bg-myRed-1 text-white" />
      </button>
      <button>
        <FaMessage size={24} />
      </button>
      <button>
        <IoIosNotifications size={30} />
      </button>
    </nav>
  );
}
