import React, { useState, useEffect, useRef } from 'react'

const Sound = ({ audioSource, icon: Icon }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const sounding = useRef(new Audio(audioSource))

  const toggleSound = () => {
    setPlaying(!isPlaying)
  }

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  useEffect(() => {
    sounding.current.loop = true
    sounding.current.volume = volume

    if (isPlaying) {
      sounding.current.play()
    } else {
      sounding.current.pause()
      sounding.current.currentTime = 0
    }
  }, [isPlaying, volume])

  return (
    <div style={{ display: 'inline-block' }}>
      {isPlaying ? (
        <div style={{ position: 'relative' }}>
          <Icon
            onClick={toggleSound}
            style={{
              backgroundColor: 'rgba(52, 152, 219, 0.7)',
              border: '2px solid #000',
              borderRadius: '30px'
            }}
          />
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
        </div>
      ) : (
        <Icon
          onClick={toggleSound}
          style={{
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            border: '1px solid #000',
            borderRadius: '30px'
          }}
        />
      )}
    </div>
  )
}

export default Sound
