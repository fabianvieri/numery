import React from 'react'

const Input = ({ onkeyup }) => {
    return (
        <input type="text" className="br2 bn pa1" onkeyup={onkeyup} placeholder="1,22,101,1122,.." />
    );
}

export default Input;