import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className='w-full px-4 lg:px-[4vw]'>
      <Hero/>
    </main>
    <Footer/>
      
    </>
  )
}

export default App