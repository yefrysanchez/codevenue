import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPage = () => {
  const [song, setSong] = useState({
    title: "",
    genre: "",
    duration: "",
    fileUrl: "",
  });

  const notify = () => toast("Song added");
  const badNotify = () => toast("Wrong Password");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current?.value !== import.meta.env.VITE_ADMIN_PASSWORD) {
      badNotify();
      return;
    } else {
      setSong({
        title: titleRef.current?.value ?? "",
        genre: genreRef.current?.value ?? "",
        duration: durationRef.current?.value ?? "",
        fileUrl: fileUrlRef.current?.value ?? "",
      });
      notify();
    }
  };

  useEffect(() => {
    //send song to DB
  }, [song]);

  const passwordRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const fileUrlRef = useRef<HTMLInputElement>(null);

  return (
    <main className="max-w-6xl mx-auto mt-8 px-4">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
        action=""
        method="post"
      >
        <input
          ref={titleRef}
          className="border p-2 rounded-lg"
          placeholder="Title"
          type="text"
          name="Title"
        />
        <select ref={genreRef} name="genres">
          <option value="Hip Hop">Hip Hop</option>
          <option value="Pop">Pop</option>
          <option value="Chill House">Chill House</option>
          <option value="Latino">Latino</option>
          <option value="Coding Rhythm">Coding Rhythm</option>
          <option value="Jazz">Jazz</option>
        </select>

        <input
          ref={durationRef}
          className="border p-2 rounded-lg"
          placeholder="Duration"
          type="number"
          name="duration"
        />
        <input
          ref={fileUrlRef}
          className="border p-2 rounded-lg"
          placeholder="FileUrl"
          type="text"
          name="fileUrl"
        />
        <input
          ref={passwordRef}
          className="border p-2 rounded-lg"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="bg-gray-400 p-2 cursor-pointer rounded-lg text-white font-bold text-xl hover:bg-purple-700 transition "
          type="submit"
          value="Add Song"
        />
      </form>
    </main>
  );
};

export default AdminPage;

export interface Track {
  id: number;
  title: string;
  genre: string;
  duration: number;
  fileUrl: string;
}
