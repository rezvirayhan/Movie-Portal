import './App.css'
import Header from './Pages/Header'
import Sidebar from './Pages/Sidebar'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
        </div>
      </main >    

    </>
  )
}

export default App
