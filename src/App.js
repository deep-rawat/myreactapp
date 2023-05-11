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
  console.log(process.env);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/about">About</Link> 
          <Link to="/contact">Contact</Link>
          {`Project is running on ${process.env.REACT_APP_ENV}`}
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