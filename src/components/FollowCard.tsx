export default function FollowCard() {
  return (
    <div className="max-w-72 overflow-hidden rounded-xl bg-white p-4">
      <h1 className="mb-4 font-bold">Who is to follow you</h1>
      <FollowItem
        data={{
          profilePicture:
            "https://st4.depositphotos.com/12982378/30287/i/450/depositphotos_302876834-stock-photo-beautiful-smiling-girl-isolated-pink.jpg",
          username: "Ingel San Juan",
          userID: "yeyai_sj",
        }}
      />
      <FollowItem
        data={{
          profilePicture:
            "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
          username: "Marwin Eula",
          userID: "UC_King",
        }}
      />
      <FollowItem
        data={{
          profilePicture:
            "https://media.istockphoto.com/id/1377252309/photo/shot-of-a-mother-spending-time-with-her-son.jpg?s=612x612&w=0&k=20&c=irB0vkpoXGcYYYV_b03YADRct3CkRo21rGTz05fRPB8=",
          username: "Norbert Baluya",
          userID: "fauster30",
        }}
      />
      <button className="mt-2 text-sm font-light">Show More</button>
    </div>
  );
}

type FollowItemProp = {
  data: {
    profilePicture: string;
    username: string;
    userID: string;
  };
};
function FollowItem({ data }: FollowItemProp) {
  return (
    <div className="mb-4 flex items-center justify-around gap-4">
      <img
        className="h-12 w-12 flex-none rounded-full object-cover object-center"
        src={data.profilePicture}
        alt="Profile Picture"
      />
      <div className="col-span-2 basis-1/2">
        <h2 className="text-sm font-medium">{data.username}</h2>
        <p className="text-sm font-thin">@{data.userID}</p>
      </div>
      <button className="rounded-full bg-myRed-1 px-3 py-2 text-sm text-white hover:bg-myRed-2">
        Follow
      </button>
    </div>
  );
}
