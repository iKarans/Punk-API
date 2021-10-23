import React from 'react';
import "./Filter.scss";

const Filter = (props) => {
    const { handleIsClassic, phLevel, handlePhLevel, abvLevel, handleAbvLevel } = props;
    const handlePhChange = (event) => {
        handlePhLevel(event.target.value);
    }
    const handleAbvChange = (event) => {
        handleAbvLevel(event.target.value)
    }
    return (
            <div className="filter">
                <label htmlFor="pH">pH:</label>
                <input type="range" min="3" max="5" step="0.1" value={phLevel} className="slider" id="pH" onInput={handlePhChange} />
                <label htmlFor="ABV">ABV:</label>
                <input type="range" min="0" max="15" value={abvLevel} className="slider" id="ABV" onInput={handleAbvChange}/>
                <label htmlFor="scales">Classic:</label>
                <input type="checkbox" id="classic" name="classic" onInput={handleIsClassic}/>
            </div>
    )
}

export default Filter