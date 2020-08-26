import React from 'react'
import Container from 'react-bootstrap/Container'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Events from '../Components/Events'
import '../Css/Style.css'
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
          <section>
            <Main />
          </section>
          <section>
            <Cards />
          </section>
          <section id="Banner">
            <Banner />
          </section>
          <section>
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
