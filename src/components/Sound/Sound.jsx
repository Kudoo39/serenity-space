import { useState, useEffect, useRef } from 'react'
import './Sound.css'
import PropTypes from 'prop-types'

const Sound = ({ audioSource, icon: Icon }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSource)
      audioRef.current.loop = true
    }
  }, [audioSource])

  useEffect(() => {
    const audio = audioRef.current

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  const toggleSound = () => {
    setPlaying((prev) => !prev)
  }

  const handleVolume = (e) => {
    setVolume(parseFloat(e.target.value))
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{ position: 'relative' }}>
        <Icon
          onClick={toggleSound}
          aria-label={isPlaying ? 'Pause sound' : 'Play sound'}
          className={`sound-icon ${isPlaying ? 'playing' : ''}`}
        />
        {isPlaying && (
          <input
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolume}
            aria-label='Volume control'
          />
        )}
      </div>
    </div>
  )
}

Sound.propTypes = {
  audioSource: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
}

export default Sound
