import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import '../Css/Events.css'
function Events() {
  return (
    <div className="events-container">
      <div className="view-events">
        <div id="event-nav">Upcoming events</div>
        <button className="view-events">View all events</button>
      </div>
      <div className="all-events">
        <CardDeck>
          <Card>
            <Card.Img src={require('../Images/up-img.svg')} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <div className="date">01</div> AUG
              </Card.Title>
              <Card.Text>Ludlow campus rock festival 2019</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img
              src={require('../Images/up-img-1.svg')}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>
                <div className="date">14</div> AUG
              </Card.Title>
              <Card.Text>2019 game design exhibition</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img
              src={require('../Images/up-img-2.svg')}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>
                <div className="date">21</div> AUG
              </Card.Title>
              <Card.Text>Study collaboration session </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </CardDeck>
      </div>
    </div>
  )
}

export default Events
