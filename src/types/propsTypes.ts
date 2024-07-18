export interface Song {
    id: number;        // Unique identifier for the song
    title: string;      // Title of the song
    artist: string;     // Artist of the song
    genre: string;      // Genre of the song
    duration: number;  // Duration of the song in seconds
    fileUrl: string;    // URL or path to the song file
  }

// src/types/state.ts

export interface Track {
  id: number;
  title: string;
  genre: string;
  duration: number;
  fileUrl: string;
}

export interface Genre {
  genre: string;
  coverImageUrl: string;
  song: Track[]; // Array of Track objects
}

export interface MusicState {
  currentTrack: Track | null;
  playlist: Track[];
  isPlaying: boolean;
  volume: number; // Volume as a percentage (0-100)
  playTrack: (track: Track) => void;
  audioRefStore: React.RefObject<HTMLAudioElement> | null;
  togglePlay: () => void;
  setAudioRefStore: (ref: React.RefObject<HTMLAudioElement>) => void;
  setVolume: (volume: number) => void;
  addTrackToPlaylist: (track: Track) => void;
  removeTrackFromPlaylist: (id: number) => void;
}
