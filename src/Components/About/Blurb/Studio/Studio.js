import React from 'react';
import Experience from '../../Experience/Experience.js';

const Studio = ({ studio, dates, roles }) => {
    return (
        <div>
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