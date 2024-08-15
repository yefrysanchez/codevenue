import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AlbumPage from "../pages/AlbumPage"
import Robots from "../robots.txt"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:albumName" element={<AlbumPage />} />
        <Route path="/:albumName" element={<AlbumPage />} />
        <Route path="/robots.txt" element={Robots} />
    </Routes>
  )
}

export default AppRouter