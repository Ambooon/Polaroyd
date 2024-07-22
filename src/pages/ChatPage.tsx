import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function ChatPage() {
  return (
    <div className="md:container mx-auto">
      <div className="h-screen grid-cols-8 gap-4 md:py-4 md:grid">
        <div className="col-span-3 min-h-full rounded-xl bg-white p-4 lg:col-span-2 overflow-y-scroll">
          <div className="mb-4 flex items-center gap-4">
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
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
            <PersonItem />
          </div>
        </div>
        <div className="col-span-5 lg:col-span-6 hidden rounded-xl bg-white p-4 md:block">
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
    <div className="flex items-center justify-between rounded-xl bg-white p-2 duration-100 ease-in-out hover:bg-myRed-2 hover:text-white">
      <div className="flex items-center gap-4">
        <img
          className="h-12 w-12 rounded-full object-cover object-center"
          src="https://img.freepik.com/free-photo/black-boy-posing_23-2148171603.jpg"
          alt="Profile Picture"
        />
        <div className="">
          <p className="font-medium">Marwin Eula</p>
          <p className="text-sm">Asan ka pre?</p>
        </div>
      </div>
      <p className="col-span-1 text-sm font-light">1h</p>
    </div>
  );
}
