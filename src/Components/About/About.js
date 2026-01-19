import React from 'react';
import Blurb from './Blurb/Blurb';
import Experience from './Experience/Experience';
import resume from '../../resume.json';
import './About.css';

function About() {
    const { intro, experience, software } = resume[0];
    const experienceList = experience.map(({title, description}) => {
        return (
            <li>
                <Experience
                    title={ title }
                    description={ description}
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
                        { experienceList }
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