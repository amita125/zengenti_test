import React from 'react'
import '../Css/Style.css'
function Main() {
  return (
    <div className="main-page">
      <div className="text-area">
        <h1>STUDENT LIFE</h1>
        <h3>
          There is so much going on at Ludlow University, both on and off
          campus.
        </h3>
        <h4>Lisa Smith</h4>
        <p className="course">Student, BSc (Hons) Computer Games Design </p>
        <button className="view-button">View student stories</button>
      </div>

      <div className="image-area">
        <img src={require('../Images/Badge.svg')} alt="badge" class="imgA1" />
        <img src={require('../Images/lady.svg')} alt="lady" class="imgA2" />
      </div>
    </div>
  )
}

export default Main
