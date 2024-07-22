import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function NotificationPage() {
  return (
    <div className="mx-auto h-screen max-h-screen overflow-y-scroll p-2 md:container">
      <div className="mb-2 flex items-center gap-4">
        <NavLink to={"/"}>
          <IoMdArrowRoundBack size={24} />
        </NavLink>
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>
      <section className="grid grid-cols-1 items-center divide-y-2">
        <NotificationItem
          data={{
            profilePicture:
              "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg",
            text: "Roma Jane likes you",
          }}
        />
        <NotificationItem
          data={{
            profilePicture:
              "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg",
            text: "Roma Jane likes you",
          }}
        />
        <NotificationItem
          data={{
            profilePicture:
              "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg",
            text: "Roma Jane likes you",
          }}
        />
      </section>
    </div>
  );
}

type NotificationItemProp = {
  data: {
    profilePicture: string;
    text: string;
  };
};

function NotificationItem({ data }: NotificationItemProp) {
  return (
    <article className="flex items-center gap-4 p-2">
      <img
        src={data.profilePicture}
        alt="Profile Picture"
        className="size-10 rounded-full object-cover object-center"
      />
      <p>{data.text}</p>
    </article>
  );
}
