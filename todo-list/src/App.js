import React, { Component } from 'react';
import Header from './components/Header';
import Loginform from './components/Loginform';

class App extends Component {
  render(){
    return (
    <div className="App">
     <Header />
     <Loginform />
    </div>
 
  );
  }
  
}

export default App;
