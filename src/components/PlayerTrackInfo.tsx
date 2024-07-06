

const PlayerTrackInfo = () => {
  return (
    <div className="h-full md:w-full w-2/3 flex gap-4 items-center ">
      <div className="h-full mb-2 aspect-square rounded-lg overflow-hidden relative group">
        <img
          className="h-full w-full object-cover"
          src="./hiphop.jpg"
          alt="album image"
        />
        <h3 className="absolute z-10 text-white text-center font-bold text-lg leading-tight tracking-tighter top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
          Hip Hop
        </h3>
        <div className="bg-black/40 absolute inset-0"></div>
      </div>

      <div className="font-bold">
        <h3>All These Things That I've Done</h3>
        <h4 className="text-gray-500">Drake</h4>
      </div>
    </div>
  );
};

export default PlayerTrackInfo;
