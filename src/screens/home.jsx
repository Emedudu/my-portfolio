import React from "react";
import Skill from "../components/skills";


const Home = ({appState})=>{
    return(
        <div className="pt-5">
            <div>
                <div style={{color:'gold', fontWeight:'bold', fontSize:'25px'}}>
                    Hello!
                </div> <br/>
                <p>
                    I am Eme, a web developer.
                </p>
            </div>
            <div>
                <p>
                    Below are my skills and confidence levels:
                </p>
                <div>
                    {Object.entries(appState).map((item,i)=>{
                    return (
                        <Skill 
                        key = {i} 
                        entry = {item[0]} 
                        color = {item[1]>66?'success':
                        item[1]>50?'warning':
                        'danger'}
                        value = {item[1]}/>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home