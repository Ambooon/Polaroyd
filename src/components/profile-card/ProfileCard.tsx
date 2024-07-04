type ProfileCardProp = {
  data: {
    bannerPicture: string;
    profilePicture: string;
    username: string;
    userID: string;
    bio: string;
    following: number;
    followers: number;
  };
};

export default function ProfileCard({ data }: ProfileCardProp) {
  return (
    <div className='w-72 h-fit rounded-xl overflow-hidden bg-slate-100'>
      <img
        className='w-full h-24 object-cover object-center'
        src={data.bannerPicture}
        alt='Profile Banner Pic'
      />
      <img
        className='w-24 h-24 object-cover object-center rounded-full mx-auto -mt-12 mb-4'
        src={data.profilePicture}
        alt='Profile Picture'
      />
      <div className='text-center mb-4 px-4'>
        <h1 className='font-bold text-xl'>{data.username}</h1>
        <p className='font-thin text-sm'>@{data.userID}</p>
        <p className='font-light mt-2'>{data.bio}</p>
      </div>
      <div className='grid grid-cols-2 py-4 border-t border-b'>
        <div className='text-center border-r'>
          <p>{data.following}</p>
          <p>Following</p>
        </div>
        <div className='text-center'>
          <p>{data.followers}</p>
          <p>Followers</p>
        </div>
      </div>
      <div className='flex justify-center items-center py-4'>
        <button className='text-myRed hover:text-red-600'>My Profile</button>
      </div>
    </div>
  );
}
