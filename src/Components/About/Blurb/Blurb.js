import React from 'react';
import './Blurb.css';

function Blurb(props) {
    const { title, writeup } = props

    return (
        <div className="Blurb">
            <h1>{ title }</h1>
            <p>{ writeup }</p>
        </div>
    )
}

export default Blurb