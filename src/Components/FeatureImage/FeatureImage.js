import React from 'react';

function FeatureImage(props) {
    const { high, low, alt } = props
    return (
        <div className="FeatureImage">
            <img src={`${process.env.PUBLIC_URL}images/${high}`} alt={alt} />
        </div>
    )
}

export default FeatureImage