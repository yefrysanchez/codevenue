import Album from "../components/Album";
import Shuffle from "../components/Shuffle";

const HomePage = () => {
  const genres = [
    {
      title: "Hip Hop",
      img: "./hiphop.jpg",
    },
    {
      title: "Pop",
      img: "./pop.jpg",
    },
    {
      title: "Chill House",
      img: "./chillhouse.jpg",
    },
    {
      title: "Latino",
      img: "./latino.jpg",
    },
    {
      title: "Coding Rhythm",
      img: "./coding.jpg",
    },
    {
      title: "Jazz",
      img: "./jazz.jpg",
    },
  ];

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <div className="mx-6 my-12 flex justify-between items-center">
          <h2 className="tracking-tighter font-bold text-3xl ">
            Recently Played
          </h2>
          <Shuffle />
        </div>

        <div className="px-6 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {genres.map((genre, i) => (
            <div key={i}>
              <Album title={genre.title} img={genre.img} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
