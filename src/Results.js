import React from 'react';

function Results(props) {

    return(
        <ul>
          {props.results.map(function(listValue){
            return <li>{listValue}</li>
          })}
        </ul>
  );

}
export default Results;
