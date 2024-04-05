import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className='w-full px-4 lg:px-[4vw]'>
      <Outlet/>
    </main>
    <Footer/>
      
    </>
  )
}

export default App