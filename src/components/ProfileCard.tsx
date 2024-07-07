import { NavLink } from "react-router-dom";

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
    <div className="max-h-fit min-h-80 w-72 overflow-hidden rounded-xl bg-white">
      <img
        className="h-16 w-full object-cover object-center"
        src={data.bannerPicture}
        alt="Profile Banner Pic"
      />
      <img
        className="mx-auto -mt-10 mb-2 h-20 w-20 rounded-full object-cover object-center"
        src={data.profilePicture}
        alt="Profile Picture"
      />
      <div className="mb-4 px-4 text-center">
        <h1 className="text-lg font-bold">{data.username}</h1>
        <p className="text-sm font-thin">@{data.userID}</p>
        <p className="mx-auto mt-1 w-3/4 text-sm font-light">{data.bio}</p>
      </div>
      <div className="grid grid-cols-2 border-b border-t py-2 text-sm font-light">
        <div className="border-r text-center">
          <p className="font-semibold">{data.following}</p>
          <p>Following</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{data.followers}</p>
          <p>Followers</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <NavLink
          to={"/profile"}
          className="text-sm font-medium text-myRed-1 hover:text-myRed-2"
        >
          My Profile
        </NavLink>
      </div>
    </div>
  );
}
