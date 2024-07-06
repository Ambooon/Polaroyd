import { FiUpload } from 'react-icons/fi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export default function UploadPhoto() {
  return (
    <>
      <div className='flex gap-4 justify-start items-center mb-4'>
        <NavLink to={'/'}>
          <IoMdArrowRoundBack size={24} />
        </NavLink>
        <h1 className='font-bold text-2xl'>Upload Photo</h1>
      </div>
      <div className='bg-white max-w-md mx-auto p-4'>
        <div className=''>
          <input
            maxLength={50}
            className='outline-none py-2 text-myNeutral-4 bg-transparent mb-2 w-full text-sm'
            type='text'
            placeholder='Add Location'
          />
          <div className='mx-auto min-h-80 bg-myNeutral-2 text-white grid justify-center items-center mb-4'>
            <div className=''>
              <FiUpload className='mx-auto mb-2' size={40} />
              <p>Upload Photo</p>
            </div>
          </div>
          <textarea
            maxLength={100}
            className='outline-none py-2 text-myNeutral-2 bg-transparent mb-2 w-full resize-none overflow-hidden text-center my-auto'
            placeholder='Add Caption'
          />
        </div>
        <button className='p-1 rounded-sm text-white bg-myRed-1 hover:bg-myRed-2 text-lg block ml-auto'>Upload</button>
      </div>
    </>
  );
}
