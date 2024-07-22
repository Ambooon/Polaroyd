import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function ChatPage() {
  return (
    <div className="container mx-auto">
      <div className="grid h-screen grid-cols-8 gap-4 py-4">
        <div className="col-span-2 rounded-xl bg-white p-4">
          <div className="flex gap-4 items-center mb-4">
            <NavLink to={"/"}>
              <IoMdArrowRoundBack size={24} />
            </NavLink>
            <h1 className="text-2xl font-bold">Chats</h1>
          </div>
          <input
            className="mb-4 w-full rounded-full border px-4 py-1"
            type="text"
            placeholder="Search"
          />
          <div className="grid gap-2">
            <PersonItem />
            <PersonItem />
            <PersonItem />
          </div>
        </div>
        <div className="col-span-6 rounded-xl bg-white p-4">
          <div className="flex items-center justify-start gap-4">
            <img
              className="col-span-2 h-12 w-12 rounded-full object-cover object-center"
              src="https://img.freepik.com/free-photo/black-boy-posing_23-2148171603.jpg"
              alt="Profile Picture"
            />
            <p className="text-3xl font-bold">Marwin Eula</p>
          </div>
          <div className="flex gap-4">
            <input
              className="w-full rounded-md bg-myNeutral-1 px-4 outline-none"
              type="text"
              placeholder="Type your message"
            />
            <button className="flex-none rounded-md bg-myRed-1 px-4 py-2 font-semibold text-white hover:bg-myRed-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonItem() {
  return (
    <div className="grid grid-cols-9 items-start rounded-xl bg-white p-2 duration-100 ease-in-out hover:bg-myRed-2 hover:text-white">
      <img
        className="col-span-2 h-12 w-12 rounded-full object-cover object-center"
        src="https://img.freepik.com/free-photo/black-boy-posing_23-2148171603.jpg"
        alt="Profile Picture"
      />
      <div className="col-span-6">
        <p className="font-medium">Marwin Eula</p>
        <p className="text-sm">Asan ka pre?</p>
      </div>
      <p className="col-span-1 text-sm font-light">1h</p>
    </div>
  );
}
