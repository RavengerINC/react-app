import React from 'react';
import DownloadPDFButton from './DownloadPDF/DownloadPDFButton.js';
import './Blurb.css';

function Blurb(props) {
    const { title, writeup } = props

    return (
        <div className="Blurb">
            <div className="Row">
                <DownloadPDFButton />
                <h1>{ title }</h1>
            </div>
            <p>{ writeup }</p>
        </div>
    )
}

export default Blurb