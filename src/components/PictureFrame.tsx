import { CiHeart } from 'react-icons/ci';

type PictureFrameProp = {
  data: {
    profilePicture: string;
    userID: string;
    postPicture: string;
    caption?: string;
    location?: string;
  };
};

export default function PictureFrame({ data }: PictureFrameProp) {
  return (
    <div className='max-w-80 p-4 bg-white break-inside-avoid-column h-fit shadow-md'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center gap-2'>
          <img
            className='w-10 h-10 object-cover object-center rounded-full'
            src={data.profilePicture}
            alt='Profile Picture'
          />
          <div className='leading-none'>
            <p className=''>{data.userID}</p>
            <p className='text-sm font-thin'>{data.location}</p>
          </div>
        </div>
        <button>
          <CiHeart size={28} />
        </button>
      </div>
      <img className='mb-4 w-full' src={data.postPicture} alt='Post Picture' />
      <p className='text-center'>{data.caption}</p>
    </div>
  );
}
