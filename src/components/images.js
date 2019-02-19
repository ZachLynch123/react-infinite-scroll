import React from 'react';

// Functional component to display images
const Images = (props) => {
    return(
        <img className="single-img" src={props.img.urls.thumb}/>
    );
}

export default Images;