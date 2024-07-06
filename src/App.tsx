import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PlayerBar from "./components/PlayerBar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <main className="min-h-screen pb-24">
      <Navbar />
      <AppRouter />
      <Footer />
      <PlayerBar />
    </main>
  );
}

export default App;
