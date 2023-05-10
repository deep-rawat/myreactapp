import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';

function App() {
  return (

    <Router>
           <div>
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
  
  );
}

export default App;
