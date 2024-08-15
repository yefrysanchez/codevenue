
const Shuffle = ({title = "Genres Shuffle"}) => {
  return (
    <button aria-label='Genres Shuffle' className="font-bold text-lg md:text-2xl flex items-center gap-2 bg-gray-100 hover:bg-gray-200 py-4 px-8 rounded-xl hover:text-purple-700 transition ">
      <span>{title}</span>
      <i className="fa-solid fa-shuffle"></i>
    </button>
  );
};

export default Shuffle;
