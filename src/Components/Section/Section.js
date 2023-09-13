import React from 'react';
import FeaturePreview from '../FeaturePreview/FeaturePreview';
import './Section.css';
import data from '../../data.json';

function Section(props) {
    const { searchText } = props

    const filteredData = data.filter(data => {
        return data.category.includes(searchText)
    });
    
    filteredData.sort((a, b) => b.date.localeCompare(a.date))

    const previews = filteredData.map(({ id, project, title, position, preview }, i) => {
        return (
            <FeaturePreview
                id={id}
                key={project}
                title={title}
                position={position}
                preview={preview}
            />
        )
    })

    return (
        <div className="Section">
            {previews}
        </div>
    )
}

export default Section