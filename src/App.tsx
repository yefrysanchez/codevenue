
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PlayerBar from './components/PlayerBar'
import AlbumPage from './pages/AlbumPage'

function App() {

  return (
    <main className='min-h-screen pb-24'>
      <Navbar />
      <AlbumPage />
      <Footer />
      <PlayerBar />
    </main>
  )
}

export default App
