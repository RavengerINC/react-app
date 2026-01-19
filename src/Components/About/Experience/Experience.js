import React from 'react';
import './Experience.css';
import { useState } from 'react'

function Experience(props) {
    const { title, description } = props
    const [isToggled, toggle] = useState(false)
    const toggleVisibility = () => {
        toggle(!isToggled);
    }

    return (
        <div className="Experience">
            <div className="TitleBar">
                <label>
                    <input type="checkbox" defaultChecked={isToggled} onClick={toggleVisibility} />
                </label>
                <h1>{ title }</h1>
            </div>
                {isToggled && <div className="Description">
                <p>{ description }</p>
            </div>}
        </div>
    )
}

export default Experience