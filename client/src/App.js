import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi There</h2>
        </div>  
        <p className="App"> 
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }
}    
export default App;
