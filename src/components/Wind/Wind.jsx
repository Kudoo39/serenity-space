import React from 'react'
import { WiNightAltCloudyWindy } from 'react-icons/wi'
import './Wind.css'
import Sound from '../Sound/Sound'

const Wind = () => {
  return (
    <div className="wind-container">
      <Sound audioSource="/sound/wind.mp3" icon={WiNightAltCloudyWindy} />
    </div>
  )
}

export default Wind
