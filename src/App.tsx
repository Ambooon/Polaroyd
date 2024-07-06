import { IoIosAdd } from 'react-icons/io';
import FollowCard from './components/FollowCard';
import Navbar from './components/Navbar';
import PictureFrame from './components/PictureFrame';
import ProfileCard from './components/ProfileCard';
import { data } from './DummyData';
import { userData } from './DummyProfileData';
import ProfilePage from './pages/ProfilePage';
import { Routes, Route, NavLink } from 'react-router-dom';
import UploadPhoto from './components/UploadPhoto';

export default function App() {
  return (
    <div className='container mx-auto p-4'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Navbar />
              <div className='grid grid-cols-7 mt-4'>
                <section className='col-span-2 h-fit grid gap-4 justify-around mr-auto'>
                  <ProfileCard
                    data={{
                      ...userData,
                    }}
                  />
                  <FollowCard />
                </section>
                <section className='col-span-5 mt-6'>
                  <div className='flex justify-between items-center mb-2'>
                    <p className='font-bold text-2xl'>Feed</p>
                    <NavLink to={'/upload'} className='border border-myRed-1 hover:bg-myRed-2 hover:text-white p-1 rounded-md text-myRed-1 flex items-center text-sm'>
                      <IoIosAdd size={24} />
                      <p>Add Photo</p>
                    </NavLink>
                  </div>
                  <div className='columns-2 lg:columns-3 space-y-4'>
                    {data.map((item, index) => {
                      return <PictureFrame key={index} data={{ ...item }} />;
                    })}
                  </div>
                </section>
              </div>
            </div>
          }
        />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/upload' element={<UploadPhoto />} />
      </Routes>
    </div>
  );
}
