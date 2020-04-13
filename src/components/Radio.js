import React from "react";

const Radio = ({ onchange }) => {
    return (
        <div onChange={onchange}>
            <input type="radio" id="derive" name="calc" value="derive" defaultChecked />
            <label htmlFor="derive" className="ml2 white"  >Derive</label>
            <input type="radio" id="integrate" name="calc" className="ml2 bg-black-40" value="integrate" />
            <label htmlFor="integrate" className="ml2 white">Integrate</label>
        </div>
    );
}

export default Radio;