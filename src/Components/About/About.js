import React from 'react';
import Blurb from './Blurb/Blurb';
import Studio from './Blurb/Studio/Studio';
import resume from '../../resume.json';
import './About.css';

function About() {
    const { intro, studios, software } = resume[0];
    
    const studioList = studios.map(({studio, dates, roles}) => {
        return (
            <li>
                <Studio
                    studio={ studio }
                    dates={ dates}
                    roles={ roles }
                />
            </li>
        )
    })
    const softwareList = software.map(({ icon, alt}) => {
        return (
            <img src={`${process.env.PUBLIC_URL}/images/${icon}`} alt={alt} className="SoftwareImage" title={alt}></img>
        )
    })

    return (
        <div className="About">
            <div className="Primary">
                <div className="Intro">
                    <Blurb
                        title={ intro.title }
                        writeup={ intro.writeup }
                    />
                </div>
                <div className="Experience">
                    <ul>
                        { studioList }
                    </ul>
                </div>
            </div>
            <div className="Secondary">
                { softwareList }
            </div>
        </div>
    )
}

export default About