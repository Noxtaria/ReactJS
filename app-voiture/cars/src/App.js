import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: "Mon Catalogue Voitures",
    color: "green"
  }

  render() {
    return (
      <div className="App">
        <Mycars 
            title={this.state.titre}
            color={this.state.color}
            style={{color: 'red'}}
        />


      </div>
    )
  }
}

export default App;
