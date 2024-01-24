import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Search from './Components/Search'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  const [anime, setAnime] = useState(null)

  return (
    <div className="app">
    <Header />
    <Search setAnime ={setAnime}/>
    <Main anime={anime}/>
    <Footer/>
    </div>
  )
}

export default App;

