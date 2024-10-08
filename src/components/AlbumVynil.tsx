interface AlbumProps {
  title: string | undefined;
  img: string | undefined;
} 


const AlbumVynil: React.FC<AlbumProps> = ({ title, img }) => {
  return (
    <div className="h-full md:max-h-[400px] md:max-w-[400px] mb-2 aspect-square rounded-lg overflow-hidden relative group">
      <img className="h-full w-full object-cover " src={img} alt="album image" />
      <h1 className="absolute lg:text-7xl z-10 text-white text-center font-bold text-7xl md:text-5xl tracking-tighter top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
        {title}
      </h1>
      <div className="bg-black/40 absolute inset-0"></div>
    </div>
  );
};

export default AlbumVynil;
