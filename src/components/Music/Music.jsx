import React, { useState, useEffect, useRef } from 'react'
import './Music.css'
import { IoIosPlayCircle, IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io'
import { FaRegPauseCircle, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
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
    'music26.mp3',
    'music27.mp3'
  ]
  const [index, setIndex] = useState(0)
  const musicRef = useRef(new Audio(`/music/${musicList[index]}`))
  const [isPlay, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isLoop, setLoop] = useState(false)

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  const handleLoop = () => {
    setLoop(!isLoop)
  }

  useEffect(() => {
    const music = musicRef.current
    music.loop = true
    music.volume = volume

    if (isPlay) {
      music.play()
    } else {
      music.pause()
      music.currentTime = 0
    }
  }, [volume])

  useEffect(() => {
    musicRef.current = new Audio(`/music/${musicList[index]}`)
    const music = musicRef.current
    if (isLoop) {
      music.loop = true
    }
    isPlay ? music.play() : music.pause()
    music.addEventListener('ended', nextMusic)
    return () => {
      music.pause()
      music.currentTime = 0
      music.removeEventListener('ended', nextMusic)
    }
  }, [isLoop, index])

  useEffect(() => {
    const music = musicRef.current
    isPlay ? music.play() : music.pause()
  }, [isPlay])

  const playMusic = () => {
    setPlay(!isPlay)
  }

  const previousMusic = () => {
    setIndex((index) => (index - 1 + musicList.length) % musicList.length)
  }

  const nextMusic = () => {
    setIndex((index) => (index + 1) % musicList.length)
  }

  return (
    <div className="music-container">
      <div className="loop-container">
        {!isLoop ? (
          <RiLoopRightLine className="loop-icon" onClick={handleLoop} />
        ) : (
          <RiLoopRightLine className="loop-icon gold" onClick={handleLoop} />
        )}
      </div>
      <div className="button">
        <IoIosSkipBackward className="music-icon" onClick={previousMusic} />

        {isPlay ? (
          <FaRegPauseCircle className="music-icon" onClick={playMusic} />
        ) : (
          <IoIosPlayCircle className="music-icon" onClick={playMusic} />
        )}
        <IoIosSkipForward className="music-icon" onClick={nextMusic} />
      </div>
      <div className="volume-container">
        <div style={{ display: 'flex', gap: '12px' }}>
          <FaVolumeUp className="volume-icon" />
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
        </div>
      </div>
    </div>
  )
}

export default Music
