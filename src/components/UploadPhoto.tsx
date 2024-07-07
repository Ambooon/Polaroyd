import { FiUpload } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function UploadPhoto() {
  return (
    <>
      <div className="mb-4 flex items-center justify-start gap-4">
        <NavLink to={"/"}>
          <IoMdArrowRoundBack size={24} />
        </NavLink>
        <h1 className="text-2xl font-bold">Upload Photo</h1>
      </div>
      <div className="mx-auto max-w-md bg-white p-4">
        <div className="">
          <input
            maxLength={50}
            className="mb-2 w-full bg-transparent py-2 text-sm text-myNeutral-4 outline-none"
            type="text"
            placeholder="Add Location"
          />
          <div className="mx-auto mb-4 grid min-h-80 items-center justify-center bg-myNeutral-2 text-white">
            <div className="">
              <FiUpload className="mx-auto mb-2" size={40} />
              <p>Upload Photo</p>
            </div>
          </div>
          <textarea
            maxLength={100}
            className="my-auto mb-2 w-full resize-none overflow-hidden bg-transparent py-2 text-center text-myNeutral-2 outline-none"
            placeholder="Add Caption"
          />
        </div>
        <button className="ml-auto block rounded-sm bg-myRed-1 p-1 text-lg text-white hover:bg-myRed-2">
          Upload
        </button>
      </div>
    </>
  );
}
