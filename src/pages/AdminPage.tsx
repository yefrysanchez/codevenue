import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () => toast("Song added");
  const badNotify = () => toast("Wrong Password");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordRef.current?.value !== import.meta.env.VITE_ADMIN_PASSWORD) {
      badNotify();
      return;
    }

    const newSong = {
      title: titleRef.current?.value ?? "",
      genre: genreRef.current?.value ?? "",
      duration: durationRef.current?.value ?? "",
      fileUrl: fileUrlRef.current?.value ?? "",
    };

    try {
      setIsSubmitting(true);

      const res = await fetch(import.meta.env.VITE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSong),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      notify();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        method="post"
      >
        <input
          required
          ref={titleRef}
          className="border p-2 rounded-lg"
          placeholder="Title"
          type="text"
          name="title"
        />
        <select
          required
          className="border p-2 rounded-xl"
          ref={genreRef}
          name="genre"
        >
          <option value="Hip Hop">Hip Hop</option>
          <option value="Pop">Pop</option>
          <option value="Chill House">Chill House</option>
          <option value="Latino">Latino</option>
          <option value="Coding Rhythm">Coding Rhythm</option>
          <option value="Jazz">Jazz</option>
        </select>

        <input
          required
          ref={durationRef}
          className="border p-2 rounded-lg"
          placeholder="Duration"
          type="text" // Changed to text to handle non-integer durations
          name="duration"
        />
        <input
          required
          ref={fileUrlRef}
          className="border p-2 rounded-lg"
          placeholder="File URL"
          type="text"
          name="fileUrl"
        />
        <input
          required
          ref={passwordRef}
          className="border p-2 rounded-lg"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          required
          className="bg-gray-400 p-2 cursor-pointer rounded-lg text-white font-bold text-xl hover:bg-purple-700 transition"
          type="submit"
          value="Add Song"
          disabled={isSubmitting} // Disable the submit button while submitting
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
  duration: number; // Duration might need conversion to number
  fileUrl: string;
}
