import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mx-auto grid max-h-fit max-w-4xl grid-cols-2 items-center">
      <div className="">
        <img
          className="h-full w-full origin-center object-cover"
          src="https://i.pinimg.com/originals/2f/9d/dc/2f9ddc7304a5b6ba6e27aacac8626704.jpg"
          alt="Background Image"
        />
      </div>
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-5xl font-bold text-myRed-1">Register</h1>
          <p className="font-light">Capture and save your memories</p>
        </div>
        <input
          className="mb-4 block rounded-sm px-2 py-1"
          type="text"
          placeholder="User ID"
        />
        <input
          className="mb-4 block rounded-sm px-2 py-1"
          type="password"
          placeholder="Password"
        />
        <input
          className="mb-4 block rounded-sm px-2 py-1"
          type="password"
          placeholder="Confirm Password"
        />
        <div className="mb-8 text-center text-sm font-thin hover:text-myRed-2">
          <NavLink to={"/login"}>Already have an account?</NavLink>
        </div>
        <button className="mx-auto block rounded-full bg-myRed-1 px-12 py-2 font-medium text-white hover:bg-myRed-2">
          Register
        </button>
      </div>
    </div>
  );
}
