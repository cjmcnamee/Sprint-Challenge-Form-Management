import React from 'react';
import FormikLogin from "./components/Login"
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Login</h2>
          <FormikLogin />
        </header>
      </div>
    );
  }
}

export default App;
