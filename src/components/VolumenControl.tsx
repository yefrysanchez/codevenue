import React from 'react';
import { useMusicStore } from '../store/store';

const VolumeControl: React.FC = () => {
  const { audioRefStore } = useMusicStore((state) => state);
  const [volume, setVolume] = React.useState(0.3);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRefStore?.current) {
      const newVolume = Number(event.target.value);
      audioRefStore.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <div className="flex items-center">
      <label htmlFor="volume-slider" className="mr-2">{volume < 0.5 ? <i className="fa-solid fa-volume-low"></i>: <i className="fa-solid fa-volume-high"></i>}</label>
      <input
      aria-label='volume'
        id="volume-slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-24"
      />
    </div>
  );
};

export default VolumeControl;