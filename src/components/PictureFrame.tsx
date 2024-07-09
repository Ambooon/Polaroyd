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
    <article className="break-inside-avoid-column bg-white p-4 sm:shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img
            className="size-8 rounded-full object-cover object-center"
            src={data.profilePicture}
            alt="Profile Picture"
          />
          <div className="leading-none">
            <p className="text-sm font-medium">{data.userID}</p>
            <p className="text-xs font-thin">{data.location}</p>
          </div>
        </div>
        <button>
          <CiHeart size={28} />
        </button>
      </div>
      <img className="mb-4 max-h-96" src={data.postPicture} alt="Post Picture" />
      <p className="text-center">{data.caption}</p>
    </article>
  );
}
