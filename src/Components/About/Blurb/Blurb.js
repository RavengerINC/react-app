import React from 'react';

function Blurb(props) {
    const { title, writeup } = props

    return (
        <div className="About">
            <h1>{ title }</h1>
            <p>{ writeup }</p>
        </div>
    )
}

export default Blurb