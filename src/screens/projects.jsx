import React from "react";
import Categorize from "../components/categorize";

const Projects = ({appState})=>{
    return(
        <div className="pt-5">
            <p>
                Here are my projects:
                
            </p>
            {Object.entries(appState).map((category,i)=>{
                return(
                    <Categorize key={i} category={category[0]} projects={category[1]}/>
                )
                
                })}

        </div>
    )
}

export default Projects