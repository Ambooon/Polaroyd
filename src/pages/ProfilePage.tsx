import { data } from '../DummyData';
import { userData } from '../DummyProfileData';
import Navbar from '../components/Navbar';
import PictureFrame from '../components/PictureFrame';

export default function ProfilePage() {
  return (
    <div className='min-h-screen py-4'>
      <Navbar />
      <div className='mt-6 mb-12 max-w-xl mx-auto'>
        {/* <img
          className='w-full h-48 object-cover object-bottom'
          src={userData.bannerPicture}
          alt='Banner Picture'
        /> */}
        <img
          className='w-32 h-32 object-cover object-center rounded-full mx-auto'
          src={userData.profilePicture}
          alt='Profile Picture'
        />
        <p className='text-center font-bold text-3xl'>{userData.username}</p>
        <p className='text-center font-light mb-2'>@{userData.userID}</p>
        <p className='text-center mb-4'>{userData.bio}</p>
        <p className='text-center font-semibold'>
          {userData.followers} followers · {userData.following} following
        </p>
      </div>
      <div>
        <div className='flex justify-center items-start gap-8 font-semibold mb-4'>
          <button className='pb-2 border-b-4 border-myNeutral-2'>
            Created
          </button>
          <button>Liked</button>
          <button>Saved</button>
        </div>
      </div>
      <div className='columns-5 p-4 space-y-4'>
        {data.map((item, index) => {
          return <PictureFrame key={index} data={{ ...item }} />;
        })}
      </div>
    </div>
  );
}
