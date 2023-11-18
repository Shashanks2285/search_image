import React from "react";

const Sresult = (props)=>{
    const img = `https://source.unsplash.com/600x450/?${props.query}` ;
    return(
        <div>
            <img src={img} alt="!no_image" />
        </div>
    )
}

export default Sresult;