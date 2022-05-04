import React from "react";
import Projectize from "./Projectize/projectize";

const Categorize = ({category,projects})=>{
    return(
        <div style={{borderTop:'1px solid black', borderBottom:'1px solid black'}}>
            <p>{category}</p>
            <div>               
                <Projectize projects={projects}/>
            </div>
        </div>
    )
}

export default Categorize;