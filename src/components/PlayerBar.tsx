import { useEffect, useRef, useState } from "react";
import { useMusicStore } from "../store/store";
import VolumeControl from "./VolumenControl";

// Define the type for props if needed

const PlayerBar: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  //Zustand Storee/////////////////

  const {
    isPlaying,
    togglePlay,
    currentTrack,
    setAudioRefStore,
  } = useMusicStore((state) => state);

  //////////////////////////

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      togglePlay();
    }
  };

  // Handle Seeking
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  };

  // Format Time
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

//Store audio ref in zustand to pass it to ohers components
  useEffect(() => {
    audioRef.current.volume = 0.3
    setAudioRefStore(audioRef);
  }, [audioRef]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [audioRef, currentTrack]);

  return (
    <div className="fixed bottom-0 left-0 right-0 px-4 py-2 flex items-center justify-between z-50 bg-gray-600 text-white">
      <audio src={currentTrack?.fileUrl} ref={audioRef}  />
      <div className="text-3xl md:text-4xl grid grid-cols-3 md:gap-8 gap-3 w-1/3 md:w-fit">
        <button>
          <i className="fa-solid fa-backward lg:hover:text-purple-700 transition duration-200"></i>
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <i className="fa-solid fa-pause text-5xl lg:hover:text-purple-700 transition duration-200"></i>
          ) : (
            <i className="fa-solid fa-play md:text-5xl text-4xl lg:hover:text-purple-700 transition duration-200"></i>
          )}
        </button>
        <button>
          <i className="fa-solid fa-forward lg:hover:text-purple-700 transition duration-200"></i>
        </button>
      </div>
      <div className="flex-1 mx-4">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-600 rounded"
        />
      </div>
      <div className="text-sm flex items-center h-full">
        <VolumeControl />
        <span className="ml-2">{formatTime(currentTime)}</span> /{" "}
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default PlayerBar;
