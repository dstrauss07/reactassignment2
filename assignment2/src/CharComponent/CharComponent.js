import React from 'react';

const CharComponent = (props) => {
    
    let charList = [];
    for(var i = 0; i< props.textLength; i++)
    {
        charList.push(props.userInputValues.slice(i))
    }
     

    return(
    <div style={props.style} >
     {charList[i]}
       </div>);
    }


export default CharComponent;