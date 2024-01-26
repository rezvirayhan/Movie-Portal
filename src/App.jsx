import { useState } from 'react'
import './App.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Sidebar from './Pages/Sidebar'
import MovieList from './cine/MovieList'
import { MovieContext } from './context/Index'

function App() {
  const [cartDta, setCartData] = useState([])
  return (
    <>
      <MovieContext.Provider value={{ cartDta, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main >
        <Footer />
      </MovieContext.Provider>
    </>
  )
}

export default App
