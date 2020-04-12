import React from 'react'


const Input = ({ placeholder, onchange }) => {
    return (
        <input
            type="text"
            className="br2 bn pa1"
            placeholder={placeholder}
            onChange={onchange}
        />
    );
}

export default Input;