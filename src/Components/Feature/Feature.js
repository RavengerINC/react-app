import React from 'react';
import data from '../../data.json';
import { useParams } from 'react-router-dom';
import FeatureImage from '../FeatureImage/FeatureImage';
import './Feature.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Feature(props){
    let { id } = useParams();
    const { description, position, writeup, images, software } = data[id]
    const featureImages = images.map(({ high, low, alt }, i) => {
        return (
            <FeatureImage
                id={i}
                high={high}
                low={low}
                alt={alt}
            />
        )
    })
    const softwareIcons = software.map(({ icon, alt }, i) => {
        return (
            <img src={`${process.env.PUBLIC_URL}images/${icon}`} alt={alt}></img>
        )
    })
    

    return (
        <div className="Feature">
            <h2>{ description }</h2>
            <Carousel>
                {featureImages}
            </Carousel>
            <div className="Title">
                <h1>{ position }</h1>
            </div>
            <div className="SoftwareIcons">
                { softwareIcons }
            </div>
            <div className="Writeup">
                <p>{ writeup }</p>
            </div>

        </div>
    )
}

export default Feature;