import React from 'react';
import { Toggle } from '../../Toggle/Toggle';
import './Experience.css';

function Experience(props) {
    const { title, description } = props
    const logState = state => {
        console.log("Toggled:", state)
    }

    return (
        <div className="Experience">
            <Toggle
                label="Toggle me"
                toggled={true}
                onClick={logState}
            />
            <h1>{ title }</h1>
            <p>{ description }</p>
        </div>
    )
}

export default Experience