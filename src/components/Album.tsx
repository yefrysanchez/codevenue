import { songs } from "../data/trackData";


interface AlbumProps {
  title: string;
  img: string;
}

const Album: React.FC<AlbumProps> = ({ title, img }) => {

const tracksCount = songs.filter(song => song.genre === title)
  
  return (
    <div>
      <div className="group max-h-68 max-w-68 md:max-h-60 md:max-w-60 mb-2 aspect-square rounded-lg overflow-hidden relative group">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition"
          src={img}
          alt="album image"
        />
        <h3 className="absolute z-10 text-white text-center font-bold text-4xl md:text-5xl tracking-tighter top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
          {title}
        </h3>
        <div className="bg-black/40 absolute inset-0"></div>
      </div>
      <p className="group-hover:text-purple-700 font-bold transition leading-tight">
        {title}
      </p>
      <p className="text-gray-400 leading-tight">
        {tracksCount.length} Tracks
      </p>
    </div>
  );
};

export default Album;
