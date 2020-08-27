import React from 'react'
import '../Css/Stylesheet/nav_main.css'

function Main() {
  return (
    <div className="main-page">
      <div className="text-area">
        <h1 id="main-title">STUDENT LIFE</h1>
        <blockquote>
          There is so much going on at
          <div className="break">Ludlow University, both on and off</div>
          <div className="break">campus.</div>
        </blockquote>
        <span id="stu-name">Lisa Smith</span>
        <br />
        <span id="course">Student, BSc (Hons) Computer Games Design</span>
        <br />
        <button className="view-button">View student stories</button>
      </div>
      <div className="image-area">
        <img
          src={require('../Images/Badge.svg')}
          alt="badge"
          className="imgA1"
        />
        <img src={require('../Images/lady.svg')} alt="lady" className="imgA2" />
      </div>
    </div>
  )
}

export default Main
