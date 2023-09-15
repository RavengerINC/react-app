import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturePreview.css';

function FeaturePreview(props) {
    const { id, title, preview } = props
    return (
        <section className="FeaturePreview">            
            <Link to={`/features/${id}`} className="FeatureLink">
                <img src={`${process.env.PUBLIC_URL}/images/${preview}`} alt={title} ClassName="Image"/>
            </Link>
            <div className="FeatureDescription">
                <h2>{title}</h2>
            </div>
        </section>
    )
}

export default FeaturePreview