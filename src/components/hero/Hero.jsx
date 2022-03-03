import React from 'react'
import heroImage from '../../images/heroImage.JPEG'

export default function Hero() {
  return (
    <div className='hero-section'>
      <img src={heroImage} />
      <p>WELCOME TO YOUR<br/>BROTHERS BLOG</p>
    </div>
  )
}
