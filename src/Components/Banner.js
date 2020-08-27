import React from 'react'
import '../Css/Stylesheet/Banner.css'
function Banner() {
  return (
    <div className="banner-container">
      <div className="inner-banner">
        <p id="line"></p>
        <div className="banner-text">
          Come along to one of our Open Days and find out{' '}
          <span>everything you need to know about the campus, courses,</span>{' '}
          <span>and facilities</span>
        </div>
        <button className="book-button">Book an Open Day</button>
      </div>
    </div>
  )
}

export default Banner
