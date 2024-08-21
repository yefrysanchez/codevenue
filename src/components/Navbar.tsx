import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full border border-b h-20 sticky left-0 top-0 bg-white z-50">
      <nav className="max-w-6xl px-6 mx-auto h-full font-bold tracking-tighter text-xl">
        <Link to={"/"} className="flex gap-2 items-center h-full hover:opacity-80 w-fit" >
          <div>
            <i className="fa-solid fa-headphones text-purple-700"></i>
          </div>
          <div className="text-2xl">
            <h1>CodeVenue</h1>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
