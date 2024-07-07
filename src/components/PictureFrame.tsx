import { CiHeart } from "react-icons/ci";

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
    <div className="h-fit max-w-80 break-inside-avoid-column bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src={data.profilePicture}
            alt="Profile Picture"
          />
          <div className="leading-none">
            <p className="">{data.userID}</p>
            <p className="text-sm font-thin">{data.location}</p>
          </div>
        </div>
        <button>
          <CiHeart size={28} />
        </button>
      </div>
      <img className="mb-4 w-full" src={data.postPicture} alt="Post Picture" />
      <p className="text-center">{data.caption}</p>
    </div>
  );
}
