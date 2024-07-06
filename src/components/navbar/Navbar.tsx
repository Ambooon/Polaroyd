import { FaCaretDown } from 'react-icons/fa';
import { TiMessage } from 'react-icons/ti';
import { RiNotification3Line } from 'react-icons/ri';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
      <div className='relative'>
        <input
          type='text'
          className='border border-gray-300 rounded-md py-2 px-4 pr-10 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 w-full'
          placeholder='Search'
        />
      </div>
      <div className='flex justify-between items-center gap-4'>
        <div className='flex items-center justify-between gap-4 px-4 border-r border-myNeutral-2'>
          <button>
            <TiMessage size={28} />
          </button>
          <button>
            <RiNotification3Line size={24} />
          </button>
        </div>
        <button className='flex justify-between items-center gap-2 p-1 rounded-full bg-myNeutral-4 text-white'>
          <img
            className='w-8 h-8 object-cover object-center rounded-full'
            src='https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65746.jpg'
            alt='Profile Picture'
          />
          <p>Francis</p>
          <FaCaretDown />
        </button>
      </div>
    </nav>
  );
}
