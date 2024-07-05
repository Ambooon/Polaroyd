import FollowCard from './components/follow-card/FollowCard';
import PictureFrame from './components/picture-frame/PictureFrame';
import ProfileCard from './components/profile-card/ProfileCard';
import { data } from './DummyData';

export default function App() {
  return (
    <div className='grid grid-cols-7 container mx-auto py-4'>
      <section className='col-span-2 h-fit grid gap-4 justify-around mx-auto'>
        <ProfileCard
          data={{
            bannerPicture:
              'https://i.pinimg.com/736x/b1/33/a4/b133a4318e52af2bf674ccb81423f23b.jpg',
            profilePicture:
              'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65746.jpg',
            username: 'Francis Angoring',
            userID: 'ambon29',
            bio: 'I am a software developer with passion in photography',
            followers: 107,
            following: 192,
          }}
        />
        <FollowCard />
      </section>
      <section className='col-span-5 columns-3 px-2'>
          {data.map((item, index) => {
            return <PictureFrame key={index} data={{...item}}/>
          })}
      </section>
    </div>
  );
}
