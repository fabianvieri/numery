import React from "react";

const Radio = () => {
    return (
        <div>
            <input type="radio" id="derive" name="calc" />
            <label htmlFor="derive" className="ml2 white">Derive</label>
            <input type="radio" id="integrate" name="calc" className="ml2" />
            <label htmlFor="integrate" className="ml2 white">Integrate</label>
        </div>
    );
}

export default Radio;