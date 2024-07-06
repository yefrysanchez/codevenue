import PlayerCTA from "./PlayerCTA";
import PlayerTrackInfo from "./PlayerTrackInfo";

const PlayerBar = () => {

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-gray-200 h-24 w-full">
      <div className="h-[6px] w-full bg-gray-600">
        <div className="h-[6px] w-1/3 bg-purple-700"></div>
      </div>
      <div className="h-full flex justify-between items-center md:px-8 px-2 py-2 max-w-6xl mx-auto">
        <PlayerTrackInfo />
        <PlayerCTA />
      </div>
    </div>
  );
};

export default PlayerBar;
