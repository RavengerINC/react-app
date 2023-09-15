import React from 'react';
import './Experience.css';

function Experience(props) {
    const { title, description } = props

    return (
        <div className="Experience">
            <h1>{ title }</h1>
            <p>{ description }</p>
        </div>
    )
}

export default Experience