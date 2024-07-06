import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AlbumPage from "../pages/AlbumPage"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:albumName" element={<AlbumPage />} />
    </Routes>
  )
}

export default AppRouter