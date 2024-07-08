import { IoIosAdd } from "react-icons/io";
import FollowCard from "./components/FollowCard";
import Navbar from "./components/Navbar";
import PictureFrame from "./components/PictureFrame";
import ProfileCard from "./components/ProfileCard";
import { data } from "./DummyData";
import { userData } from "./DummyProfileData";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route, NavLink } from "react-router-dom";
import UploadPhoto from "./components/UploadPhoto";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <div className="container mx-auto min-h-screen py-4">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="mt-4 grid grid-cols-7">
                <section className="col-span-2 mr-auto grid h-fit justify-around gap-4">
                  <ProfileCard
                    data={{
                      ...userData,
                    }}
                  />
                  <FollowCard />
                </section>
                <section className="col-span-5 mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-2xl font-bold">Feed</p>
                    <NavLink
                      to={"/upload"}
                      className="flex items-center rounded-md border border-myRed-1 p-1 text-sm text-myRed-1 hover:bg-myRed-2 hover:text-white"
                    >
                      <IoIosAdd size={24} />
                      <p>Add Photo</p>
                    </NavLink>
                  </div>
                  <div className="columns-2 space-y-4 lg:columns-3">
                    {data.map((item, index) => {
                      return <PictureFrame key={index} data={{ ...item }} />;
                    })}
                  </div>
                </section>
              </div>
            </div>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/upload" element={<UploadPhoto />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
