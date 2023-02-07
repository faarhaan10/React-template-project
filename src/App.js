import logo from './logo.svg';
import './App.css';
import { AppContext } from './Context/AuthProvider';
import { useContext } from 'react';
import Main from './Componants/Main/Main';

function App() {
  const { user } = useContext(AppContext);
  // console.log(user);
  return (
    <>
      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Main />
    </ >
  );
}

export default App;
