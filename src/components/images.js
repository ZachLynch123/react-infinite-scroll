import React from 'react';

const Images = (props) => {
    console.log(props.img);
    return(
        <img src={props.img.urls.thumb}/>
    );
}

export default Images;