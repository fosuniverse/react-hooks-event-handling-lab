// Code EyesOnMe Component Here
import  React from 'react';
import  ReactDOM  from 'react-dom';

function EyesOnMe(){
    let eyesOnMe = 'blur';
    function handleClick(event){
        eyesOnMe =! eyesOnMe;
        console.log(eyesOnMe)
    }
    return(
        <div>
            <h2>Eyes on me</h2>
           <button onClick ={handleClick}>  {eyesOnMe ? 'Good!':'Hey! Eyes on me!'} </button> 
        </div>
    )
}

 export default EyesOnMe;
