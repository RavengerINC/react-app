import React from 'react';
import Experience from '../../Experience/Experience.js';
import './Studio.css';

const Studio = ({ studio, dates, roles }) => {
    return (
        <div className="studio">
            <h1>{studio} {dates}</h1>
            <ul>
                {roles.map(({title, description}) => (
                     <li>
                        <Experience
                            title={ title }
                            description={ description }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Studio;