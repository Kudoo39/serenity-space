import React from 'react'
import { GiEgyptianBird } from 'react-icons/gi'
import './Bird.css'
import Sound from '../Sound/Sound'

const Bird = () => {
  return (
    <div className="bird-container">
      <Sound audioSource="/sound/birds.mp3" icon={GiEgyptianBird} />
    </div>
  )
}

export default Bird
