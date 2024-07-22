import PictureFrame from "../components/PictureFrame";
import { data } from "../DummyData";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarMobile } from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen md:container md:mx-auto">
      <Navbar />
      <div className="mb-4 hidden md:flex">
        <NavLink
          to={"/upload"}
          className="rounded-md bg-myRed-1 p-2 text-white"
        >
          Add Photo
        </NavLink>
      </div>
      <section className="items-center gap-4 pb-16 pt-4 columns-2xs space-y-8 md:pt-0">
        {data.map((item, index) => {
          return <PictureFrame key={index} data={{ ...item }} />;
        })}
      </section>
      <div className="fixed bottom-0 left-0 z-50 w-screen md:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
}