import React, {Component} from 'react';
import './App.css';
import './Validation/Validation';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';


class App extends Component{
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) =>{
    this.setState({userInput:event.target.value}); 
  }
  
  render(){
    const style ={
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'

    }
    return(
    <div className="App">
      <input type ="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
     <Validation 
      textLength={this.state.userInput.length}/>
    <CharComponent style= {style} userInputValues = {this.state.userInput}  textLength = {this.state.userInput.length}/>
    </div>
    );
  }


}

export default App;
