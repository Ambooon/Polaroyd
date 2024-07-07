import { NavLink } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className='grid grid-cols-2 items-center max-h-fit max-w-4xl mx-auto'>
      <div className=''>
        <img
          className='w-full h-full object-cover origin-center'
          src='https://i.pinimg.com/originals/2f/9d/dc/2f9ddc7304a5b6ba6e27aacac8626704.jpg'
          alt='Background Image'
        />
      </div>
      <div className='mx-auto'>
        <div className='mb-12 text-center'>
          <h1 className='text-5xl font-bold text-myRed-1 mb-2'>
            Register
          </h1>
          <p className='font-light'>Capture and save your memories</p>
        </div>
        <input
          className='px-2 py-1 rounded-sm block mb-4'
          type='text'
          placeholder='User ID'
        />
        <input
          className='px-2 py-1 rounded-sm block mb-4'
          type='password'
          placeholder='Password'
        />
        <input
          className='px-2 py-1 rounded-sm block mb-4'
          type='password'
          placeholder='Confirm Password'
        />
        <div className='text-center font-thin text-sm mb-8 hover:text-myRed-2'>
          <NavLink to={'/login'}>Already have an account?</NavLink>
        </div>
        <button className='px-12 py-2 rounded-full bg-myRed-1 hover:bg-myRed-2 text-white block mx-auto font-medium'>
          Register
        </button>
      </div>
    </div>
  );
}
