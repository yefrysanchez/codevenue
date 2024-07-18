export const songData = {
  id: 1,
  title: "I need a Girl",
  genre: "Hip Hop",
  duration: 248, // Duration in seconds
  fileUrl: "/i_need_a_girl.mp3", // URL or path to the song file
};

export const favorite = [
  {
    id: 1,
    genre: "Favorites",
    coverImageUrl: "./hiphop.jpg",
    song: [
      {
        id: 1,
        title: "I need a Girl",
        genre: "Hip Hop",
        duration: 248, // Duration in seconds
        fileUrl: "/i_need_a_girl.mp3", // URL or path to the song file
      },
    ],
  },
];

export const genres = [
  {
    id: 1,
    genre: "Hip Hop",
    coverImageUrl: "./hiphop.jpg",
    song: [
      {
        id: 1,
        title: "I need a Girl",
        genre: "Hip Hop",
        duration: 248, // Duration in seconds
        fileUrl: "/i_need_a_girl.mp3", // URL or path to the song file
      },
      {
        _id: 2,
        title: "is there someone else?",
        genre: "Hip Hop",
        duration: 228, // Duration in seconds
        fileUrl: "/is_there_someone_else.mp3", // URL or path to the song file
      },
    ],
  },
];
