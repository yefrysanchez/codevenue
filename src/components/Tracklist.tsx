import { useMusicStore } from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Track } from "../types/propsTypes";
import React from "react";

interface TracklistProps {
  songs: Track[]; // Array of Track objects
}

const Tracklist: React.FC<TracklistProps> = ({ songs }) => {
  ////////////////zustand///////////////

  const {
    addTrackToPlaylist,
    playlist,
    playTrack,
    audioRefStore,
    removeTrackFromPlaylist,
  } = useMusicStore((state) => state);

  ///////////////////////////
  const notify = (action:string) => toast(action);
  const handlePlaylist = (song: Track) => {
    if (playlist.find((e) => e.id === song.id)) {
      removeTrackFromPlaylist(song.id);
      notify("Song removed the playlist");
    } else {
      addTrackToPlaylist(song);
      notify("Song added to the playlist");
    }
  };

  function convertSecondsToMinutes(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format minutes and seconds as "mm:ss"
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  async function waitPlay() {
    setTimeout(() => {
      audioRefStore?.current?.play();
    }, 1000);
  }

  const togglePlayPause = (song: Track) => {
    playTrack(song);
    waitPlay();
  };

  return (
    <div className="w-full overflow-hidden">
      <ul className="w-full">
        {songs.map((song, i: number) => (
          <button
            key={i}
            className="border-y py-4 w-full px-6 hover:bg-gray-100 transition duration-200 cursor-default"
          >
            <li className="text-lg font-semibold text-gray-600 flex gap-4">
              <span className="font-light">{i + 1}</span>
              <span onClick={() => handlePlaylist(song)}>
                {playlist.find((id) => id.id === song.id) ? (
                  <i className="fa-solid fa-heart cursor-pointer"></i>
                ) : (
                  <i className="fa-regular fa-heart cursor-pointer"></i>
                )}
              </span>
              <span
                onClick={() => togglePlayPause(song)}
                className="cursor-pointer w-full text-start h-full"
              >
                {song.title}
              </span>
              <span className="font-light ml-auto">
                {convertSecondsToMinutes(song.duration)}
              </span>
            </li>
          </button>
        ))}
      </ul>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Tracklist;
