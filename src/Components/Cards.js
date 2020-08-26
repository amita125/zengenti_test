import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import '../Css/Cards.css'

function Cards() {
  return (
    <div className="cards-field">
      <div className="card-list-1">
        <div className="cards-1">
          <Card>
            <Card.Img
              variant="top"
              src={require('../Images/group.svg')}
              id="activities"
            />
            <Card.Body className="cards-1-body">
              <div className="title">
                Activities and clubs
                <img
                  src={require('../Images/arrow.svg')}
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="cards-2">
          <Card>
            <Card.Img
              variant="top"
              src={require('../Images/building.svg')}
              id="accomodation"
            />
            <Card.Body className="cards-2-body">
              <div className="title">
                Accommodation{' '}
                <img
                  src={require('../Images/arrow.svg')}
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="card-list-2">
        <CardDeck id="main-deck">
          <Card>
            <Card.Img variant="top" src={require('../Images/lady2.svg')} />
            <Card.Body>
              <div className="title-deck">
                Chat to a student
                <img
                  src={require('../Images/arrow.svg')}
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="text-deck">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../Images/laptop.svg')} />
            <Card.Body>
              <div className="title-deck">
                Support{' '}
                <img
                  src={require('../Images/arrow.svg')}
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="text-deck">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../Images/cycle.svg')} />
            <Card.Body>
              <div className="title-deck">
                Life in Ludlow{' '}
                <img
                  src={require('../Images/arrow.svg')}
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="text-deck">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  )
}

export default Cards
