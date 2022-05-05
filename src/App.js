// importing libraries
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// importing screens which would constitute routes
import Home from "./screens/home";
import Projects from "./screens/projects";
import Contact from "./screens/Contact/contact";
import Navigation from "./components/Navigation/navigation";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

const  App= ()=> {
  // app state to be fetched from api. Would be deleted after developing backend
  // no need to develop backend
  let [appState, setAppState] = useState({
    'skills':{
      'HTML':75,
      'CSS':60,
      'JAVASCRIPT':90,
      'REACT.JS':75,
      'REDUX':70,
      'BOOTSTRAP':55,
      'NODE.JS':80,
      'EXPRESS':80,
      'MONGODB':60,
      'SOLIDITY':80,
      'PYTHON':90
    },
    'projects':{
      'APPS':{
        'WORKTALK':{
          'description':"To ease communication between bosses and workers in an organisation",
          'completed':false
        },
        // 'RANDOM':{
        //   'description':"A program to generate random numbers",
        //   'completed':true,
        //   'siteLink':'http://localhost:3000/home'
        // }
      },
      'DAPPS':{
        'MEVOTE':{
          'description':'A decentralized application for voting',
          'completed':true,
          'siteLink':'https://github.com/Emedudu/Mevote'
        },
        'NFT-MARKETPLACE':{
          'description':'A market for trading Non-Fungible Tokens',
          'completed':true,
          'siteLink':'https://github.com/Emedudu/nft-marketplace'
        },
        'FUN-D-CROWD':{
          'description':'A fund raising platform',
          'completed':true,
          'siteLink':'https://github.com/Emedudu/Fun-d-crowd'
        }
      }
    }

  })
  // fetch data from api immediately when the page loads and set the appstate
  useEffect(()=>{
    // const state = await axios.get('api')
    // setAppState(state);
  },[])

  return (
    // rendering the screens
    <div style={{
      fontFamily:'Georgia',
      fontWeight:500,
      padding:'20px'
      }}>
      <Container>
        <div className="pb-5">
          <Navigation/>
        </div>
        <div className="py-5 mt-5" style={{paddingLeft:'20px',paddingRight:'20px',borderRadius:'10px', boxShadow:'10px 10px 10px 10px rgba(50,50,50,0.5)'}}>
          <Routes>
            <Route exact path="/projects" element={<Projects appState={appState.projects}/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home appState = {appState.skills}/>}/>
          </Routes>   
        </div>
      </Container>

    </div>

  );
}

export default App;
