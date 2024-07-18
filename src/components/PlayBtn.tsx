import { useMusicStore } from "../store/store";

const PlayBtn = () => {
  const { isPlaying, togglePlay,audioRefStore } = useMusicStore((state) => state);

  const togglePlayPause = () => {
    if (audioRefStore?.current) {
      if (isPlaying) {
        audioRefStore?.current.pause();
      } else {
        audioRefStore?.current.play();
      }
      togglePlay();
    }
    
  };

  return (
    <button
      onClick={togglePlayPause}
      className="font-bold text-lg md:text-2xl flex items-center gap-2 bg-gray-100 hover:bg-gray-200 py-4 px-8 rounded-xl hover:text-purple-700 transition "
    >
      <span>{isPlaying ? "Pause" : "Play"}</span>
      <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
    </button>
  );
};

export default PlayBtn;
