import {Route, HashRouter as Router, Routes} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';

function App() {
  return (

    <Router basename="/myreactapp">
           <Routes>
                 <Route exact path='/myreactapp' element={< Home />}></Route>
                 <Route path='/about' element={< About />}></Route>
                 <Route path='/contact' element={< Contact />}></Route>
          </Routes>
       </Router>
  
  );
}

export default App;