import "./App.css";
import { Home } from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Tendencia } from "./components/Tendencia/Tendencia";
import { Footer } from "./components/Footer/Footer";
import { Blog } from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tendencia />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
