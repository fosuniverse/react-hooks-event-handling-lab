// Code Keypad Component Here
import  React from 'react';
import  ReactDOM  from 'react-dom';

function Keypad (){
    function handleChange(event){
        console.log('Entering password...')
    }
    return (
        <div>
            <input
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
            />
        </div>
    )
}

export default Keypad;