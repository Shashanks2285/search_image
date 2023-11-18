import React from "react";

const About  = (props)=>{
    return(
        <div className="About">
        <h1>About the developer</h1>
        <p>This page is <span>HOSTED</span> and <span>DESIGNED</span> by {props.name}</p>
        <br />
        <h3>This is default page.</h3>
        </div>
    )
}

export default About;