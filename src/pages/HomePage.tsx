import { Link } from "react-router-dom";
import Album from "../components/Album";
import Shuffle from "../components/Shuffle";
import { genres } from "../data/albumData";

const HomePage = () => {

  



  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <div className="mx-6 my-12 flex justify-between items-center">
          <h2 className="tracking-tighter font-bold text-3xl hidden md:block">
            Genres
          </h2>
          <div className="md:ml-auto md:mr-4 font-bold text-lg md:text-2xl flex items-center gap-2 bg-gray-100 hover:bg-gray-200 py-4 px-8 rounded-xl hover:text-purple-700 transition">
            <Link to={"/"}>Favorites <i className="fa-solid fa-heart"></i></Link>
          </div>
          <Shuffle />
        </div>

        <div className="px-6 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {genres.map((genre, i) => (
            <div key={i}>
              <Link to={`/${genre.title.replace(" ", "").toLocaleLowerCase()}`}>
                <Album title={genre.title} img={genre.img} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
