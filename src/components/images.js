import React from 'react';

// Functional component to display images
const Images = (props) => {
    return(
        <img className="single-photo" src={props.img.urls.thumb}/>
    );
}

export default Images;