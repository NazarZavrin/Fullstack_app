// 📁 ./client/src/App.js
import logo from './logo.svg';
import './App.css';
import { useCallback, useContext, useEffect, useState } from 'react';
import { URLContext } from './index.js';

function App() {
  let [appText, setAppText] = useState('');
  const requestURL = useContext(URLContext);
  const getText = useCallback(async function () {
    try {
      let response = await fetch(requestURL + '/frontend-text');
      if (response.ok) {
        let result = await response.text();
        setAppText(result);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error");
      return;
    }
  }, [requestURL]);
  useEffect(() => {
    getText();
  }, [getText]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{appText.length > 0 ? appText : "Loading..."}</div>
      </header>
    </div>
  );
}

export default App;
