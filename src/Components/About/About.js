import React from 'react';
import Blurb from './Blurb/Blurb';
import Experience from './Experience/Experience';
import './About.css';

function About() {
    return (
        <div className="About">
            <div className="Intro">
                <Blurb
                    title="Title"
                    writeup="Writeup"
                />
            </div>
            <div className="Experience">
                <ul>
                    <li>
                        <Experience
                            title="Experience"
                            description="Description"
                        />
                    </li>
                    <li>
                        <Experience
                            title="Experience"
                            description="Description"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About