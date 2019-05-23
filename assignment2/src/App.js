import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField.Inputfield';
import LengthParagraph from './LengthParagraph.LengthParagraph';

class App extends Component{

  render(){
    return(
    <div className="App">
    <InputField />
      <LengthParagraph />

    </div>
    );
  }


}

export default App;
