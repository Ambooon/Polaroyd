import PictureFrame from "../components/PictureFrame";
import { data } from "../DummyData";
import { userData } from "../DummyProfileData";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { IoIosAdd, IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <header className="flex items-center justify-between p-2">
        <h1 className="font-bold text-xl">Polaroyd</h1>
        <img
          src={userData.profilePicture}
          alt="Profile Picture"
          className="size-8 rounded-full object-cover object-center"
        />
      </header>
      <section className="flex flex-col items-center gap-4 pb-16">
        {data.map((item, index) => {
          return <PictureFrame key={index} data={{ ...item }} />;
        })}
      </section>
      <div className="fixed bottom-0 left-0 z-50 w-screen">
        <NavBar />
      </div>
    </div>
  );
}

function NavBar() {
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
