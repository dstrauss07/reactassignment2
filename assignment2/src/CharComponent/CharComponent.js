import React from 'react';

const CharComponent = (props) => {
    
    let charList = [];
    // for(var i = 0; i< props.textLength; i++)
    // {
    //     charList.push(props.userInputValues.slice(i))
    // }
    const style ={
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
  
      }

    return(
    <div style={style} onClick={props.clicked}>
     {props.character}
       </div>);
    }


export default CharComponent;