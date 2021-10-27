import React from 'react';
import "./Filter.scss";

const Filter = (props) => {
    const { handleIsClassic, phLevel, handlePhLevel, abvLevel, handleAbvLevel } = props;
    const handlePhChange = (event) => {
        handlePhLevel(parseInt(event.target.value));
    }
    const handleAbvChange = (event) => {
        handleAbvLevel(parseInt(event.target.value))
    }
    return (
            <div className="filter">
                <label htmlFor="pH">pH:</label>
                <input type="range" min="3" max="5" step="0.1" value={phLevel} className="slider" id="pH" onInput={handlePhChange} />
                <output name="result" for="pH">{phLevel === 3 ? "3 < pH <= 5" : phLevel}</output>
                <label htmlFor="ABV">ABV:</label>
                <input type="range" min="0" max="15" value={abvLevel} className="slider" id="ABV" onInput={handleAbvChange}/>
                <output name="result" for="ABV">{abvLevel === 0 ? 0 : abvLevel - 1}{" < ABV <= "}{abvLevel === 0 ? 15 : abvLevel}</output>
                <label htmlFor="scales">Classic:</label>
                <input type="checkbox" id="classic" name="classic" onInput={handleIsClassic}/>
            </div>
    )
}

export default Filter