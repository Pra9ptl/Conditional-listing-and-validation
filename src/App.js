import React, { Component } from 'react';
import './App.css';
import Validationcomponent from './UserComponent/Validationcomponent';
import Charcomponent from './UserComponent/Charcomponent';

class App extends Component {

  state = {
    str: ''
  }

  stringLengthHandler = (strVal) => {
    this.setState({str: strVal.target.value});
  } 
  
  deleteCharacterHandler = (position) => {
    const temparr = this.state.str.split('');
    temparr.splice(position, 1);
    this.setState({str: temparr.join('')});
  }

  render() {

    const styles = {
      width: "60%",
      margin: "16px auto",
      border: "1px solid #eee",
      boxShadow: "0 2px 3px #ccc",
      padding: "16px",
      textAlign: "center"
    };

    const letters = this.state.str.split('').map((ch,pos) => { 
      return <Charcomponent letter={ch} position={pos} click={() => this.deleteCharacterHandler(pos)} />;
     });
      
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div style={styles}>
          <h1>Task #1</h1>
          <p>
          <label>Enter text here: </label>
          <input type='text' onChange={ this.stringLengthHandler }  value={this.state.str}/>
          </p>
          <p>
          <label>length of the text is: {this.state.str}</label>
          </p>    
        </div>

        <div style={styles}>
          <h1>Task #2 & #3</h1>
          <Validationcomponent strLen={this.state.str.length} />    
        </div>

        <div style={styles}>
          <h1>Task #4 & #5</h1>
          {letters}
        </div>
      </div>
    );
  }
}

export default App;
