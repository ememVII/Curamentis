import Carousel from './components/Carousel'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Carousel/>
        <Services/>
      </main>
    </>
  )
}

export default App
