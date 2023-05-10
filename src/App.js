import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('Name');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="form-group">
    <label htmlFor="exampleInputEmail1">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
  </div>
        <p>
          Sunil Ji
          <br />
          Dev Ji
          <br />
          Abrar Ji
          <br />
          Kamlesh Ji
          <br />
          Vinayak Ji
          <br />
          Balwant ji
        </p>
        <p>
          <i>{name}</i> ki Shaadi me jlul jlul aana
        </p>
        <p>Baal Manuhar: <strong>Balwant</strong></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
