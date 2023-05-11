import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {About} from './components/About';
import {Home} from './components/Home';
import {Contact} from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/about">About</Link> 
          <Link to="/contact">External</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;