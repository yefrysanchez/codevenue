import { create } from 'zustand';
import { MusicState, Track } from '../types/propsTypes.ts';

export const useMusicStore = create<MusicState>((set) => ({
  currentTrack: {
    id: 2,
    title: "is there someone else?",
    genre: "Hip Hop",
    duration: 228, // Duration in seconds
    fileUrl: "/is_there_someone_else.mp3", // URL or path to the song file
  },
  playlist: [],
  isPlaying: false,
  volume: 50,

  playTrack: (track: Track) => set({ currentTrack: track, isPlaying: true }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setVolume: (volume: number) => set({ volume }),

  addTrackToPlaylist: (track: Track) => set((state) => ({
    playlist: [...state.playlist, track],
  })),

  removeTrackFromPlaylist: (id: number) => set((state) => ({
    playlist: state.playlist.filter(track => track.id !== id),
  })),
  setAudioRefStore: (ref) => set({ audioRefStore: ref }),
  audioRefStore: null,
}));