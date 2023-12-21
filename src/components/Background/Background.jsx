import React, { useState, useEffect, useRef } from 'react'
import './Background.css'
import Day from '../../assets/city/day.mp4'
import Rain from '../../assets/city/rain.mp4'
import { IoRainy, IoSunny } from 'react-icons/io5'
import { FaSun, FaCloudRain } from 'react-icons/fa6'

const Background = () => {
  const [weather, setWeather] = useState(Day)
  const raining = useRef(new Audio('/sound/rain.mp3'))
  const [volume, setVolume] = useState(0.5)

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  const changeWeather = () => {
    setWeather((currentWeather) => {
      return currentWeather === Day ? Rain : Day
    })
  }

  useEffect(() => {
    raining.current.loop = true
    raining.current.volume = volume

    if (weather === Rain) {
      raining.current.play()
    } else {
      raining.current.pause()
      raining.current.currentTime = 0
    }
  }, [weather, volume])

  useEffect(() => {
    weather === Rain ? raining.current.play() : raining.current.pause()
  }, [weather])

  return (
    <div className="background-container">
      <div className="button-container">
        <div>
          {weather === Rain ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <IoSunny onClick={changeWeather} className="weather-icon sun"></IoSunny>
              <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
            </div>
          ) : (
            <FaCloudRain onClick={changeWeather} className="weather-icon" />
          )}
        </div>
      </div>
      <video key={weather} className="video" autoPlay loop muted>
        <source src={weather} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background
