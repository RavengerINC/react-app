import React from 'react';
import Section from './Section/Section';

function Tv() {
    return (
        <div className="Tv">
            <div className="Tv-reel">
                <iframe 
                    width="100%" 
                    height="500" 
                    src="https://www.youtube.com/embed/8KT9egsN1yo?si=eQF4GEigb8zGSpk8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>                    
                </iframe>
            </div>
            <Section
                searchText="tv-animation"
            />
        </div>
    )
}

export default Tv