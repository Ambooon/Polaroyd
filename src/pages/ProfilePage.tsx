import { data } from "../DummyData";
import { userData } from "../DummyProfileData";
import { Navbar, NavbarMobile } from "../components/Navbar";
import PictureFrame from "../components/PictureFrame";

export default function ProfilePage() {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="mx-auto mb-12 max-w-xl pt-8 md:mt-6 md:pt-0">
        {/* <img
          className='w-full h-48 object-cover object-bottom'
          src={userData.bannerPicture}
          alt='Banner Picture'
        /> */}
        <img
          className="mx-auto h-32 w-32 rounded-full object-cover object-center"
          src={userData.profilePicture}
          alt="Profile Picture"
        />
        <p className="text-center text-3xl font-bold">{userData.username}</p>
        <p className="mb-2 text-center font-light">@{userData.userID}</p>
        <p className="mb-4 text-center">{userData.bio}</p>
        <p className="text-center font-semibold">
          {userData.followers} followers · {userData.following} following
        </p>
      </div>
      <div>
        <div className="mb-4 flex items-start justify-center gap-8 font-semibold">
          <button className="border-b-4 border-myNeutral-2 pb-2">
            Created
          </button>
          <button>Liked</button>
          <button>Saved</button>
        </div>
      </div>
      <div className="columns-2xs items-center gap-4 space-y-8 pb-16 pt-8 md:pt-0">
        {data.map((item, index) => {
          return <PictureFrame key={index} data={{ ...item }} />;
        })}
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-screen md:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
}
