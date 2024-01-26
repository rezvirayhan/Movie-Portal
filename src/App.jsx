import { useState } from 'react'
import MainPages from './Pages/MainPages'
import { MovieContext, ThemContext } from './context/Index'
import './index.css'
function App() {
  const [cartDta, setCartData] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <ThemContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartDta, setCartData }}>
          <MainPages></MainPages>
        </MovieContext.Provider>
      </ThemContext.Provider>
    </>
  )
}

export default App



