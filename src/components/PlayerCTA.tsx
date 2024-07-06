import { useState } from 'react'

const PlayerCTA = () => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);


  return (
    <div className="text-3xl md:text-4xl grid grid-cols-3 md:gap-8 gap-3 w-1/3 md:w-fit">
          <button>
            <i className="fa-solid fa-backward lg:hover:text-purple-700 transition duration-200"></i>
          </button>
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <i className="fa-solid fa-pause text-5xl lg:hover:text-purple-700 transition duration-200"></i>
            ) : (
              <i className="fa-solid fa-play md:text-5xl text-4xl lg:hover:text-purple-700 transition duration-200"></i>
            )}
          </button>
          <button>
            <i className="fa-solid fa-forward lg:hover:text-purple-700 transition duration-200"></i>
          </button>
        </div>
  )
}

export default PlayerCTA