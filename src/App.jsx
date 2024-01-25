import './App.css'
import Header from './Pages/Header'
import Sidebar from './Pages/Sidebar'
import MovieList from './cine/MovieList'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main >

    </>
  )
}

export default App
