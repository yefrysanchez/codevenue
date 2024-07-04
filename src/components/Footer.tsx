const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 mt-32 pb-12">
      <h2 className="font-bold text-3xl mb-12">About</h2>

      <p className="mb-4 max-w-2xl">
        Welcome to <span className="font-bold">CodeVenue</span>, where coding meets creativity through
        the soothing sounds of lofi music. Designed with developers in mind, our
        platform offers a curated selection of lofi beats to enhance your coding
        sessions and foster productivity.
      </p>
      <p className="mb-4 max-w-2xl">
        We recognize the importance of creating the right
        ambiance for deep focus and concentration. Our collection features
        meticulously curated tracks from talented artists worldwide, chosen
        specifically to complement your coding workflow.
      </p>
      <p>
      Made with ❤️ by <a className="font-bold hover:underline" target="_blank" href="https://www.linkedin.com/feed/">Yefry Sanchez</a>.
      </p>
    </footer>
  );
};

export default Footer;
