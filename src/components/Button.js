import React from 'react';

const Button = ({ onclick }) => {
    return (
        <button
            type="button"
            className="bn pointer pa1 ma1 br2 white bg-black-40 grow"
            onClick={onclick}>
            numer
        </button>
    );
}

export default Button;