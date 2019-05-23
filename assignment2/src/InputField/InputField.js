import React from 'react';

const InputField = (props) =>{
return <input className="userInput" type="text"  onChange={props.changed} value={props.name} />

}

export default InputField;