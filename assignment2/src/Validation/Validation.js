import React from 'react';

const Validation = (props) => {
      let paraToReturn ='';
      if (props.textLength < 6){
          paraToReturn = 'text too short'
      }
      if (props.textLength > 5){
        paraToReturn = 'text long enough'
    }

    
        return(
       <div>
           <p>{paraToReturn}</p>
        </div>
       );

}

export default Validation;