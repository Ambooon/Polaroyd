import { data } from "../DummyData";
import { userData } from "../DummyProfileData";
import Navbar from "../components/Navbar";
import PictureFrame from "../components/PictureFrame";

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto mb-12 mt-6 max-w-xl">
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
      <div className="columns-5 space-y-4 p-4">
        {data.map((item, index) => {
          return <PictureFrame key={index} data={{ ...item }} />;
        })}
      </div>
    </div>
  );
}
