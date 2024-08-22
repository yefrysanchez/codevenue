import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AlbumPage from "../pages/AlbumPage"
import AdminPage from "../pages/AdminPage"


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:genreName" element={<AlbumPage />} />
        <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default AppRouter