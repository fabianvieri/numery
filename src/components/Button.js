import React from 'react';

const Button = ({ onpress }) => {
    return (
        <button type="button" className="bn pointer pa1 ma1 br2 white bg-black-40 grow" onClick={onpress}>numer</button>
    );
}

export default Button;