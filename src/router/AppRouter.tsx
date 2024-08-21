import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AlbumPage from "../pages/AlbumPage"
import Robots from "../robots.txt"
import AdminPage from "../pages/AdminPage"


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:genreName" element={<AlbumPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/robots.txt" element={Robots} />
    </Routes>
  )
}

export default AppRouter