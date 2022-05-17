import React, { useState } from "react";
import './projectize.css';

const Project=({name,details})=>{
    const [projectText,setProjectText]=useState(name);
    
    const handleClick=()=>{
        details.completed?
        window.location=details.siteLink :
        setProjectText('not completed')
    }
    return(
        <div className="projectDiv" 
        onMouseEnter={()=>{setProjectText(details.description)}}
        onMouseLeave={()=>{setProjectText(name)}}
        onClick={handleClick}>       
            <p className="projectChild">{projectText}</p>
            <a href={details.codeLink}>Link to Code</a>         
        </div>
    )
}
const Projectize = ({projects})=>{
    return(
        <div className="projectWrapper">
            {Object.entries(projects).map((project,i)=>{
            return(<Project key={i} name={project[0]} details={project[1]}/>)})}
        </div>
    )

    
}

export default Projectize