import React from 'react'
import Container from 'react-bootstrap/Container'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Events from '../Components/Events'
import '../Css/main.css'
import '../Css/Stylesheet/responsive.css'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Main from '../Components/Main'

function Home() {
  return (
    <Container fluid>
      <div className="main-container">
        <header>
          <Navigation />
        </header>
        <main>
          <section id="student-stories">
            <Main />
          </section>
          <section id="about-ludlow">
            <Cards />
          </section>
          <section id="banner">
            <Banner />
          </section>
          <section id="events">
            <Events />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Container>
  )
}

export default Home
