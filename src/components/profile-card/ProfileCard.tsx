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
    <div className='w-72 min-h-80 max-h-fit rounded-xl overflow-hidden bg-slate-100'>
      <img
        className='w-full h-16 object-cover object-center'
        src={data.bannerPicture}
        alt='Profile Banner Pic'
      />
      <img
        className='w-20 h-20 object-cover object-center rounded-full mx-auto -mt-10 mb-2'
        src={data.profilePicture}
        alt='Profile Picture'
      />
      <div className='text-center mb-4 px-4'>
        <h1 className='font-bold text-lg'>{data.username}</h1>
        <p className='font-thin text-sm'>@{data.userID}</p>
        <p className='font-light mt-1 text-sm w-3/4 mx-auto'>{data.bio}</p>
      </div>
      <div className='grid grid-cols-2 py-2 border-t border-b text-sm font-light'>
        <div className='text-center border-r'>
          <p className="font-semibold">{data.following}</p>
          <p>Following</p>
        </div>
        <div className='text-center'>
          <p className="font-semibold">{data.followers}</p>
          <p>Followers</p>
        </div>
      </div>
      <div className='flex justify-center items-center py-4'>
        <button className='text-myRed-1 hover:text-myRed-2 text-sm font-medium'>My Profile</button>
      </div>
    </div>
  );
}
