import { Link, useParams } from "react-router-dom";
import AlbumVynil from "../components/AlbumVynil";
import PlayBtn from "../components/PlayBtn";
import Shuffle from "../components/Shuffle";
import Tracklist from "../components/Tracklist";
import { genres } from "../data/albumData";
import { useMusicStore } from "../store/store";

import { useEffect, useState } from "react";

const AlbumPage = () => {
  const [songs, setSongs] = useState([]);
  const { genreName } = useParams<{ genreName: string }>();
  const genreData = genres.find(
    (genre) => genre.title.replace(" ", "").toLocaleLowerCase() === genreName
  );
  const songData = songs.filter((song) => song.genre === genreData?.title);

  //Zustand////////////////////////////////////
  const { isPlaying } = useMusicStore((state) => state);

  //Fetching////////////////////////////////////

  const fetchSongs = async () => {
    const url = import.meta.env.VITE_URL;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const json = await res.json();
      setSongs(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <main className="mt-8 max-w-6xl mx-auto overflow-hidden">
      <Link
        to={"/"}
        className="inline-block  mb-8 text-xl font-bold  px-6 rounded-lg hover:text-purple-700 transition"
      >
        <i className="fa-solid fa-arrow-left mr-2"></i> <span>Genres</span>
      </Link>

      {/* Album Page Top Section */}

      <div className="mb-12 px-6 md:flex md:max-h-[400px] md:w-full   w-full">
        <div className="relative h-full md:w-full md:mr-[74px]">
          <div className="z-20 h-full w-full pr-[75px] md:pr-0">
            <AlbumVynil title={genreData?.title} img={genreData?.img} />
          </div>

          {/* CD Image */}
          <div className="absolute left-0 top-0 animate-slide-right -z-10 h-full pb-1  md:max-h-[400px] md:max-w-[400px]">
            <img
              className={`h-full w-full ${
                isPlaying ? "animate-spin-slow" : ""
              }`}
              src="./vynil.webp"
              alt="vynil image"
            />
          </div>
        </div>

        {/* Top CTA Buttoms */}
        <div className="md:self-end md:min-w-80">
          <div className="my-8">
            <h2 className="font-bold text-6xl transition leading-tight tracking-tighter">
              {genreData?.title || "Unknown Genre"}
            </h2>
            <p className="text-gray-400 leading-tight tracking-tighter text-3xl">
              {songData.length || 0} Tracks
            </p>
          </div>
          <div className="flex gap-4">
            <PlayBtn />
            <Shuffle title="Shuffle" />
          </div>
        </div>
      </div>
      <div>
        <Tracklist songs={songData} />
      </div>
    </main>
  );
};

export default AlbumPage;
