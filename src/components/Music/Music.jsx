import { useState, useEffect, useRef } from 'react'
import './Music.css'
import {
  IoIosPlayCircle,
  IoIosSkipBackward,
  IoIosSkipForward
} from 'react-icons/io'
import { FaRegPauseCircle, FaVolumeUp } from 'react-icons/fa'
import { RiLoopRightLine } from 'react-icons/ri'

const Music = () => {
  const musicList = [
    'music.mp3',
    'music1.mp3',
    'music2.mp3',
    'music3.mp3',
    'music4.mp3',
    'music5.mp3',
    'music6.mp3',
    'music7.mp3',
    'music8.mp3',
    'music9.mp3',
    'music10.mp3',
    'music11.mp3',
    'music12.mp3',
    'music13.mp3',
    'music14.mp3',
    'music15.mp3',
    'music16.mp3',
    'music17.mp3',
    'music18.mp3',
    'music19.mp3',
    'music20.mp3',
    'music21.mp3',
    'music22.mp3',
    'music23.mp3',
    'music24.mp3',
    'music25.mp3',
    'music26.mp3'
  ]
  const [index, setIndex] = useState(0)
  const musicRef = useRef(null)
  const [isPlay, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isLoop, setLoop] = useState(false)

  useEffect(() => {
    musicRef.current = new Audio(`/music/${musicList[index]}`)
    const music = musicRef.current

    if (isLoop) {
      music.loop = true
    }

    if (isPlay) {
      music.play()
    }

    music.addEventListener('ended', nextMusic)

    return () => {
      music.pause()
      music.currentTime = 0
      music.removeEventListener('ended', nextMusic)
    }
  }, [index, isLoop])

  useEffect(() => {
    const music = musicRef.current
    if (isPlay) {
      music.play()
    } else {
      music.pause()
    }
  }, [isPlay])

  useEffect(() => {
    musicRef.current.volume = volume
  }, [volume])

  const playMusic = () => {
    setPlay((prev) => !prev)
  }

  const previousMusic = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + musicList.length) % musicList.length
    )
  }

  const nextMusic = () => {
    setIndex((prevIndex) => (prevIndex + 1) % musicList.length)
  }

  const handleVolume = (e) => {
    setVolume(parseFloat(e.target.value))
  }

  const handleLoop = () => {
    setLoop((prev) => !prev)
  }

  return (
    <div className='music-container'>
      <div className='loop-container'>
        <RiLoopRightLine
          className={`loop-icon ${isLoop ? 'gold' : ''}`}
          onClick={handleLoop}
          aria-label={isLoop ? 'Disable loop' : 'Enable loop'}
        />
      </div>
      <div className='button'>
        <IoIosSkipBackward
          className='music-icon'
          onClick={previousMusic}
          aria-label='Previous track'
        />
        {isPlay ? (
          <FaRegPauseCircle
            className='music-icon'
            onClick={playMusic}
            aria-label='Pause'
          />
        ) : (
          <IoIosPlayCircle
            className='music-icon'
            onClick={playMusic}
            aria-label='Play'
          />
        )}
        <IoIosSkipForward
          className='music-icon'
          onClick={nextMusic}
          aria-label='Next track'
        />
      </div>
      <div className='volume-container'>
        <div style={{ display: 'flex', gap: '12px' }}>
          <FaVolumeUp className='volume-icon' />
          <input
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolume}
            aria-label='Volume control'
          />
        </div>
      </div>
    </div>
  )
}

export default Music
